import React from 'react';

import ImageCard from '../ImageCard/ImageCard';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

import s from './GalleryGrid.module.scss';

type Props = {
    images: (Basic & { slug?: string })[];
    columns: number
}

const GalleryGrid: React.FC<Props> = ({ images, columns }) => {
    return (
        <section className={s.galleryWrapper} style={{
            '--columns': columns
        } as React.CSSProperties}>
            {
                Array(columns).fill(0).map((_, index) => (
                    <div key={index} className={s.galleryColumn}>
                        {
                            images.filter((_, i) => i % columns === index).map((image) => (<ImageCard key={image.id} image={image} />))
                        }
                    </div>
                ))
            }
        </section>
    );
}
export default GalleryGrid;