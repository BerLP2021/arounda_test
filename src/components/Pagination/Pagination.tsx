import React from 'react';
import Link from 'next/link';

import s from './Pagination.module.scss';

type Props = {
    currentPage: number;
    links: {
        prev: string;
        next: string;
    };
}

const Pagination: React.FC<Props> = ({ currentPage, links }) => {
    return (
        <div className={s.paginationWrapper}>
            <button className={s.paginationButton} disabled={currentPage === 1} >
                Previous
                {currentPage !== 1 && <Link className={s.link} href={links.prev} ></Link>}
            </button>
            <span className={s.paginationButton}>{currentPage}</span>
            <button className={`${s.paginationButton} ${s.button}`} >
                <Link className={s.link} href={links.next} >Next</Link>
            </button>
        </div>
    );
}
export default Pagination;