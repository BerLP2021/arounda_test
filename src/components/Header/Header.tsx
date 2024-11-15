import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import s from './Header.module.scss';

const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={`${s.headerContainer} container`}>
                <Link href="/"><Image className={s.logo} src='/logo.png' alt='logo' height={75} width={75} /></Link>
                <div className={s.technologies}>
                    <span>Next | React | Typescript | SCSS</span>
                    <span>next-auth | MongoDB+Mongoose | Zustand</span>
                </div>
                <ul className={s.contacts}>
                    <li>
                        <a href="https://t.me/ThalerTimm" className={s.link}>
                            @ThalerTimm
                        </a>
                    </li>
                    <li>
                        <a href="tel:+380637738697" className={s.link}>
                            +38 063 773-86-97
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header