"use client";
import React, { FC, useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Full } from 'unsplash-js/dist/methods/photos/types';
import ActionsBlock from '../ActionsBlock/ActionsBlock';

import s from './ImagePage.module.scss';

type Props = {
    image: Full & {
        views?: number;
        downloads?: number;
        tags?: {
            title: string; type: string;
        }[]
    }
}

const ImagePage: FC<Props> = ({ image }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isAddedToCollection, setIsAddedToCollection] = useState(false);
    const sliderRef = React.useRef<HTMLUListElement | null>(null);
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        const xScroll = () => {
            slider.addEventListener('wheel', (event) => {
                if (event.deltaY !== 0) {
                    event.preventDefault();
                    if (event.currentTarget) {
                        (event.currentTarget as HTMLElement).scrollLeft += event.deltaY;
                    }
                }
            })
        };
        xScroll();
        return () => slider.removeEventListener('wheel', xScroll);
    }, []);

    const handleAddToFavorite = useCallback(() => {
        setIsFavorite(!isFavorite);
        alert('click Favorite');
    }, [isFavorite, setIsFavorite]);

    const handleAddToCollection = useCallback(() => {
        setIsAddedToCollection(!isAddedToCollection);
        alert('click add to collection');
    }, [isAddedToCollection, setIsAddedToCollection]);

    const {
        alt_description,
        urls,
        likes,
        views,
        downloads,
        tags,
        user,
    } = image;

    return (
        <div className='container'>
            <nav className={s.nav}>
                <ul className={s.slider} ref={sliderRef}>
                    {tags?.map((tag) => (<li key={tag.title} className={s.slide}>
                        <button className={s.slideButton}>
                            <Link className={s.slideLink} href={`/search/photos/${tag.title.replace(' ', '+')}?page=1&per_page=15`}>{tag.title}</Link>
                        </button>
                    </li>))}
                </ul>
                <ul className={s.slider} ref={sliderRef}>
                    {tags?.map((tag) => (<li key={tag.title + 'csd'} className={s.slide}>
                        <button className={s.slideButton}>
                            <Link className={s.slideLink} href={`/search/photos/${tag.title.replace(' ', '+')}?page=1&per_page=15`}>{tag.title}</Link>
                        </button>
                    </li>))}
                </ul>
            </nav>
            <section className={s.pageWrapper}>

                <div className={s.imageWrapper}>
                    <Image src={urls.regular} alt={alt_description || ''} height={600} width={600} quality={100}
                        sizes='(max-width: 1024px) 100vw, 50vw'
                    />
                </div>
                <div className={s.contentWrapper}>
                    <div className={s.authorInfoHeader}>
                        <Image className={s.authorInfoAvatar} src={user.profile_image.medium} alt={user.name} width={75} height={75} />
                        <div className={s.authorInfoName}>
                            <h2><Link className={s.link} href={user.links.html}>{user.name}</Link></h2>
                        </div>
                        <div className={s.authorInfoLocation}>
                            <svg viewBox="0 0 24 24" version="1.1"><path d="M5.988 15.637C7.313 17.596 9.317 19.717 12 22c2.683-2.283 4.688-4.404 6.013-6.363C19.338 13.679 20 11.867 20 10.2c0-2.5-.804-4.492-2.413-5.975C15.979 2.742 14.117 2 12 2c-2.117 0-3.979.742-5.587 2.225C4.804 5.708 4 7.7 4 10.2c0 1.667.663 3.479 1.988 5.437ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>
                            <span>
                                {user.location}
                            </span>
                        </div>
                    </div>
                    <hr className={s.divider} />
                    <div className={s.authorInfoDescription}>
                        <div className={s.infoBlock}>
                            <p>{user.bio}</p>
                        </div>
                        <div className={s.infoBlock}>
                            <span className={s.infoTitle}>Likes:</span> <span className={s.infoText}>{likes}</span>

                        </div>
                        <div className={s.infoBlock}>
                            <span className={s.infoTitle}>Views:</span> <span className={s.infoText}>{views}</span>

                        </div>
                        <div className={s.infoBlock}>
                            <span className={s.infoTitle}>Downloads:</span> <span className={s.infoText}>{downloads}</span>

                        </div>
                    </div>
                    <hr className={s.divider} />

                    <div className={s.authorInfoFooter}>
                        <ActionsBlock isFavorite={isFavorite} isAddedToCollection={isAddedToCollection} handleAddToFavorite={handleAddToFavorite} handleAddToCollection={handleAddToCollection} />
                    </div>

                </div>
            </section>
        </div>
    )
};

export default ImagePage;