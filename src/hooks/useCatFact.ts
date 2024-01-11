import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useCatFact = () => {
    const catFact = useSelector((state: RootState) => state.catFact);
    return catFact;
};
