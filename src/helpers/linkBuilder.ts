export function getPaginationType(pathname: string) {
    if (pathname.startsWith('/search')) {
        if (pathname.startsWith('/search/photos')) return 'searchPhotos';
        if (pathname.startsWith('/search/collections')) return 'searchCollections';
    }
    return 'gallery';
}

export const baseUrls = {
    gallery: (page: number, perPage: number, tag: string | undefined) =>
        `/gallery/${page}/${perPage}`,
    searchPhotos: (page: number, perPage: number, tag: string | undefined) =>
        `/search/photos/${tag}?page=${page}&per_page=${perPage}`,
    searchCollections: (page: number, perPage: number, tag: string | undefined) =>
        `/search/collections/${tag}?page=${page}&per_page=${perPage}`,
};
