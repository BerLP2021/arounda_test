import React from 'react'
import { useFormStatus } from 'react-dom';

import s from './LoginForm.module.scss';

const SubmitButton = () => {
    const { pending } = useFormStatus()

    return (
        <button className={`${s.submitButton} ${s.button}`} disabled={pending} type="submit" >Login</button>
    )
}

export default SubmitButton