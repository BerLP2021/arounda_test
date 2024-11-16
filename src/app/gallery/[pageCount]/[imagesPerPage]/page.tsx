import { fetchImages } from '@/actions/fetchImages'
import { normalizeImageQuantity } from '@/helpers/normalizeImageQuantity';
import { normalizePageQuantity } from '@/helpers/normalizePageQuantity';
import React from 'react'
import { _smallGrid } from '@/data/variables';
import GalleryPage from '@/components/GalleryPage/GalleryPage';
import PageTitle from '@/components/PageTitle/PageTitle';
import { notFound } from 'next/navigation';

type Props = { params: { pageCount: string; imagesPerPage: string } }

export const revalidate = 1800;

export async function generateStaticParams() {
    return [
        { pageCount: '1', imagesPerPage: '15' },
        { pageCount: '1', imagesPerPage: '30' },
        { pageCount: '2', imagesPerPage: '15' },
        { pageCount: '2', imagesPerPage: '30' },
    ]
}
export default async function Page({ params }: Props) {
    const { pageCount, imagesPerPage } = params;

    const quantity = normalizeImageQuantity(imagesPerPage);
    const page = normalizePageQuantity(pageCount);

    const images = await fetchImages(page, quantity);
    if ('errors' in images) notFound();

    const columns = quantity === _smallGrid ? 3 : 5;

    return (
        <>
            <PageTitle text='Mini gallery' />
            <GalleryPage images={images} currentPage={page} columns={columns} imagesPerPage={quantity} />
        </>
    )
}