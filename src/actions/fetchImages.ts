import { _smallGrid } from '@/data/variables';
import { unsplash } from '@/lib/unsplashClient';

export async function fetchImages(page = 1, perPage = _smallGrid) {
    const result = await unsplash.photos.list({ page, perPage });
    if (result.errors) {
        console.error(result.errors);
        return result;
    }
    return result.response?.results || [];
}
