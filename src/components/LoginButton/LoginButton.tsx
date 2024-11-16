'use client';
import React, { FC, use, useEffect } from 'react';

import { logout } from '@/helpers/auth';
import LoginForm from '../LoginForm/LoginForm';

import s from './LoginButton.module.scss';

type Props = {
    isLoggedIn: boolean;
    user: {
        name: string;
        email: string
    } | undefined
}

const LoginButton: FC<Props> = ({ isLoggedIn, user }) => {

    const [isOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        document.body.style.height = isOpen ? '100svh' : 'auto';
    }, [isOpen]);

    return (
        <>
            <div className={s.loginBlock}>
                {user && (
                    <>
                        <p className={s.userInfo}>{user?.name}</p>
                        <p className={s.userInfo}>{user?.email}</p>
                    </>
                )}
                {
                    !isLoggedIn ? (
                        <button className={`${s.loginButton} ${s.button}`} onClick={() => setIsOpen(true)}>Login</button>
                    ) :
                        <form
                            action={logout}
                        >
                            <button className={`${s.loginButton} ${s.button}`} type="submit">Logout</button>
                        </form>
                }
            </div>
            <LoginForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default LoginButton