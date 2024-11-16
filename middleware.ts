import { NextRequest } from 'next/server';
import { updateSession } from '@/helpers/auth';

export async function middleware(request: NextRequest) {
    return await updateSession(request);
}
