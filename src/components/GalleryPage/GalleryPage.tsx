'use client';
import React, { FC } from 'react';
import { usePathname } from 'next/navigation';

import GalleryGrid from '../GalleryGrid/GalleryGrid';
import Pagination from '../Pagination/Pagination';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import ColumnSwitcher from '../ColumnSwitcher/ColumnSwitcher';
import Search from '../Search/Search';
import { _largeGrid, _smallGrid } from '@/data/variables';
import { baseUrls, getPaginationType } from '@/helpers/linkBuilder';

import s from './GalleryPage.module.scss';

type Props = {
    images: (Basic & { slug?: string })[];
    columns: number;
    currentPage: number;
    imagesPerPage: number;
    queryTag?: string
}

const GalleryPage: FC<Props> = ({ images, columns, currentPage, imagesPerPage }) => {
    const pathname = usePathname();
    const paths = pathname.split('/');

    const prev = baseUrls[getPaginationType(pathname)](currentPage - 1, imagesPerPage, paths[paths.length - 1]);
    const next = baseUrls[getPaginationType(pathname)](currentPage + 1, imagesPerPage, paths[paths.length - 1]);

    const paginationLinks = {
        prev,
        next
    }

    const columnSizeLinks = {
        small: baseUrls[getPaginationType(pathname)](currentPage, _smallGrid, paths[paths.length - 1]),
        large: baseUrls[getPaginationType(pathname)](currentPage, _largeGrid, paths[paths.length - 1])
    };

    return (
        <div className={`${s.galleryWrapper} container`}>
            <div className={s.galleryControls}>
                <ColumnSwitcher columns={columns} links={columnSizeLinks} />
                <Search />
            </div>
            <GalleryGrid images={images} columns={columns} />
            <Pagination currentPage={currentPage} links={paginationLinks} />
        </div>
    )
}

export default GalleryPage;