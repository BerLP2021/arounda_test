import { _smallGrid } from '@/data/variables';
import { unsplash } from '@/lib/unsplashClient';

export async function getImage(photoId: string) {
    const response = await unsplash.photos.get({ photoId });
    return response.response;
}
