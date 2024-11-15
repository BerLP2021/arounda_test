import React, { FC } from 'react';

import s from './PageTitle.module.scss';

type Props = { text: string }

const PageTitle: FC<Props> = ({ text }) => {
    return (
        <h1 className={`${s.galleryTitle} container`}>{text}</h1>
    )
};

export default PageTitle;