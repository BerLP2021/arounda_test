import { _smallGrid } from '@/data/variables';
import { unsplash } from '@/lib/unsplashClient';

export async function searchImages(page = 1, perPage = _smallGrid, query = '') {
    const result = await unsplash.search.getPhotos({
        query,
        page,
        perPage,
    });
    if (result.errors) {
        console.error(result.errors);
        return result;
    }
    return result.response?.results || [];
}
