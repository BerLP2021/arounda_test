import { getImage } from '@/actions/getImage'
import ImagePage from '@/components/ImagePage/ImagePage'
import PageTitle from '@/components/PageTitle/PageTitle'
import React, { FC } from 'react'
import { Full } from 'unsplash-js/dist/methods/photos/types'

type Props = {
    params: {
        imageId: string
    }
}

const Page: FC<Props> = async ({ params }) => {
    const image = await getImage(params.imageId) as Full & { views?: number; downloads?: number; tags?: { title: string; type: string; }[] } | undefined;
    if (!image) return (
        <div className='container'>
            <h1>Image not found</h1>
        </div>
    );
    return (
        <>
            <PageTitle text={`Photo #${image.alt_description}`} />
            <ImagePage image={image} />
        </>
    )
}

export default Page;