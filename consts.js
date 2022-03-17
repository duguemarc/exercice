import { createFox } from './src/services/animal'

export const getFirstItems = async () => [await createFox('Renard')]
