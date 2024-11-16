import { _smallGrid } from '@/data/variables';
import { unsplash } from '@/lib/unsplashClient';

export async function getImage(photoId: string) {
    const result = await unsplash.photos.get({ photoId });
    if (result.errors) {
        console.error(result.errors);
        return result;
    }
    return result.response;
}
