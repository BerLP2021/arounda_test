import { searchImages } from '@/actions/searchImages';
import GalleryPage from '@/components/GalleryPage/GalleryPage';
import PageTitle from '@/components/PageTitle/PageTitle';
import { _smallGrid } from '@/data/variables';
import { normalizeImageQuantity } from '@/helpers/normalizeImageQuantity';
import { normalizePageQuantity } from '@/helpers/normalizePageQuantity';
import React, { FC } from 'react'

type Props = { params: { tag: string }, searchParams: { page: string; per_page: string } }

const Page: FC<Props> = async ({ params, searchParams }) => {
    const { tag } = params;
    const { page, per_page } = searchParams;

    const q = normalizeImageQuantity(per_page);
    const p = normalizePageQuantity(page);
    const columns = q === _smallGrid ? 3 : 5;

    const images = await searchImages(p, q, tag);
    return (
        <>
            <PageTitle text={`Mini gallery${tag && ` for #${decodeURIComponent(tag)}`}`} />
            <GalleryPage images={images} currentPage={p} columns={columns} imagesPerPage={q} queryTag={decodeURIComponent(tag)} />
        </>
    )
}

export default Page;
