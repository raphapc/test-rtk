import axios from 'axios';
import { CatFact } from './models/catFact';

export const fetchCatFact = async () => {
    const response = await axios.get<CatFact>('https://catfact.ninja/fact');
    return response.data;
};
