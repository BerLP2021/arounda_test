'use server';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { users } from '@/data/users';

const secretKey = process.env.JWT_SECRET_KEY as string;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('3600 sec from now')
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ['HS256'],
    });
    return payload;
}

export async function login(prevState: any, formData: FormData) {
    const login = formData.get('login') as string;
    const password = formData.get('password') as string;
    const user = users.find((user) => user.email === login && user.password === password);
    if (!user) return { message: 'Invalid credentials or user not found!' };

    const userData = { email: user.email, name: user.name };

    const expires = new Date(Date.now() + 3600 * 1000);
    const session = await encrypt({ userData, expires });

    cookies().set('session', session, { expires, httpOnly: true });

    return { message: 'success' };
}

export async function logout() {
    cookies().set('session', '', { expires: new Date(0) });
}

export async function getUser() {
    const session = cookies().get('session')?.value;
    if (!session) return;
    const payload = await decrypt(session);

    const user = users.find((user) => user.email == payload?.userData?.email);

    if (!user) return;
    return {
        name: user.name,
        email: user.email,
    };
}

export async function getSession() {
    const session = cookies().get('session')?.value;
    if (!session) return null;
    return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get('session')?.value;
    if (!session) return;

    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 3600 * 1000);
    const res = NextResponse.next();
    res.cookies.set({
        name: 'session',
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    });
    return res;
}
