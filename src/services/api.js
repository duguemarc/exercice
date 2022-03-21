import axios from 'axios';

export const getDogImg = async () => {
    const res = await axios.get('https://placedog.net/800/640?random', {
        headers: {
            accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        },
        responseType: 'blob',
    });
    return window.URL.createObjectURL(res.data);
};

export const getFoxImg = async () => {
    const res = await axios.get('https://randomfox.ca/floof');
    return res.data.image;
};
