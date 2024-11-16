"use client";
import React, { FC, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Basic } from 'unsplash-js/dist/methods/photos/types';
import ActionsBlock from '../ActionsBlock/ActionsBlock';

import s from './ImageCard.module.scss';

const ImageCard: FC<{
    image: Basic & {
        slug?: string
    }
}> = ({ image }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isAddedToCollection, setIsAddedToCollection] = useState(false);

    const handleAddToFavorite = useCallback((event: React.MouseEvent) => {
        event.preventDefault()
        setIsFavorite(!isFavorite);
    }, [isFavorite, setIsFavorite]);

    const handleAddToCollection = useCallback((event: React.MouseEvent) => {
        event.preventDefault()
        setIsAddedToCollection(!isAddedToCollection);
    }, [isAddedToCollection, setIsAddedToCollection]);

    return (
        <Link className={s.imageCard} href={`/photos/${image.slug}`}>
            <Image
                src={image.urls.regular}
                alt={image.alt_description || ''}
                height={600}
                width={600} />
            <div className={s.controlsBlock}>
                <ActionsBlock
                    isFavorite={isFavorite}
                    isAddedToCollection={isAddedToCollection}
                    handleAddToFavorite={handleAddToFavorite}
                    handleAddToCollection={handleAddToCollection} />
            </div>
        </Link>
    );
}
export default ImageCard