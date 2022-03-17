import { getDogImg, getFoxImg } from './api';

export const createDog = async (name) => {
    return {
        title: name,
        type: 'dog',
        url: await getDogImg(),
    };
};

export const createFox = async (name) => {
    return {
        title: name,
        type: 'fox',
        url: await getFoxImg(),
    };
};
