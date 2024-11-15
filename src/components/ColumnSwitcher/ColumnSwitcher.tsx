import React, { FC } from 'react'
import Link from 'next/link';

import { _largeGrid, _smallGrid } from '@/data/variables';

import s from './ColumnSwitcher.module.scss';

type Props = {
    columns: number;
    links: { small: string, large: string }
}

const ColumnSwitcher: FC<Props> = ({ columns, links }) => {
    return (
        <div className={s.columnSwitchBlock}>
            <button
                className={s.columnSwitchButton}
                disabled={columns === 3}
            >
                {
                    columns !== 3 && (
                        <Link href={links.small} style={{
                            position: 'absolute',
                            inset: 0
                        }} />
                    )
                }
                <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="8" width="10" height="32" rx="2" />
                    <rect x="19" y="8" width="10" height="32" rx="2" />
                    <rect x="34" y="8" width="10" height="32" rx="2" />
                </svg>
            </button>
            <button
                className={s.columnSwitchButton}
                disabled={columns === 5}
            >
                {
                    columns !== 5 && (
                        <Link href={links.large} style={{
                            position: 'absolute',
                            inset: 0
                        }} />
                    )
                }
                <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="8" width="6" height="32" rx="2" />
                    <rect x="12" y="8" width="6" height="32" rx="2" />
                    <rect x="21" y="8" width="6" height="32" rx="2" />
                    <rect x="30" y="8" width="6" height="32" rx="2" />
                    <rect x="39" y="8" width="6" height="32" rx="2" />
                </svg>

            </button>
        </div>
    )
}

export default ColumnSwitcher