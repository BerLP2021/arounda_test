"use client";
import React, { FC, useEffect, useState } from 'react';
import { createPortal, useFormState } from 'react-dom';

import { login } from '@/helpers/auth';
import SubmitButton from './SubmitButton';

import s from './LoginForm.module.scss';

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const initialState = {
    message: '',
}
const LoginForm: FC<Props> = ({ isOpen, setIsOpen }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const [state, formAction] = useFormState(login, initialState);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    useEffect(() => {
        if (state?.message === 'success') setTimeout(() => setIsOpen(false), 1000);
        state.message = '';
    }, [state, setIsOpen]);

    if (!isOpen || !isBrowser) return null;

    return createPortal(
        <div className={s.overlay}>
            <div className={s.formWrapper}>
                <h2 className={s.formTitle}>LoginForm</h2>
                <button className={s.closeButton} onClick={() => setIsOpen(false)}>&times;</button>
                <form
                    className={s.form}
                    action={formAction}
                >
                    <input className={s.input} name="login" type="email" placeholder="Email" />
                    <input className={s.input} name="password" type="password" placeholder="Password" />
                    <p className={s.message} style={{
                        '--message-color': state?.message === 'success' ? 'green' : 'red'
                    } as React.CSSProperties}>
                        {state?.message === 'success' ? 'Login successful!' : state?.message}
                    </p>
                    <SubmitButton />
                </form>
            </div>
        </div>,
        document.body
    )
}

export default LoginForm