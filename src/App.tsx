import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCatFact } from './features/cat-fact/catFactSlice';
import { useCatFact } from './hooks/useCatFact';
import { AppDispatch } from './store/store';

const App = () => {
    const dispatch = useDispatch<AppDispatch>();
    const catFact = useCatFact();

    useEffect(() => {
        dispatch(getCatFact());
    }, [dispatch]);

    return (
        <div className={'root'}>
            <Card className={'card'}>
                <CardContent>
                    <Typography variant='h5' component='h2'>
                        Cat Fact
                    </Typography>
                    <Typography variant='body2' component='p'>
                        {catFact?.fact}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => dispatch(getCatFact())}
                    >
                        Fetch New Fact
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default App;
