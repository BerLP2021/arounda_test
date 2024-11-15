import React, { FC, memo } from 'react';

import s from './ActionsBlock.module.scss';

type Props = {
    isFavorite: boolean;
    isAddedToCollection: boolean;
    handleAddToFavorite: (event: React.MouseEvent) => void;
    handleAddToCollection: (event: React.MouseEvent) => void;
}

const ActionsBlock: FC<Props> = memo(
    function ActionsBlock({
        isFavorite,
        isAddedToCollection,
        handleAddToFavorite,
        handleAddToCollection,
    }) {
        return (
            <div className={s.controlsBlock}>
                <button className={`${s.controlButton} ${s.favorite} ${isFavorite && s.active}`}
                    onClick={handleAddToFavorite}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" ><path d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z"></path></svg>
                </button>
                <button className={`${s.controlButton} ${s.addToCollection} ${isAddedToCollection && s.active}`}
                    onClick={handleAddToCollection}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" version="1.1"><path d="M21.8 10.5h-8.3V2.2h-3v8.3H2.2v3h8.3v8.3h3v-8.3h8.3z"></path></svg>
                </button>
            </div>
        )
    }
)

export default ActionsBlock;