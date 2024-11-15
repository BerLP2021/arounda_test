import { _smallGrid } from '@/data/variables';
import { unsplash } from '@/lib/unsplashClient';

export async function searchImages(page = 1, perPage = _smallGrid, query = '') {
    const response = await unsplash.search.getPhotos({
        query,
        page,
        perPage,
    });
    return response.response?.results || [];
}
