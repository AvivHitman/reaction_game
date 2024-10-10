import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import * as S from "./style";

interface Props {
    onEndWaiting: () => void;
    onTooSoon: () => void;
}

const Waiting = ({ onEndWaiting, onTooSoon }: Props) => {
    useEffect(() => {
        const randomTime = Math.floor(Math.random() * 3000) + 2000; // 2-5 seconds

        const timer = setTimeout(() => {
            onEndWaiting();
        }, randomTime);

        const handleKeyPress = () => {
            onTooSoon();
            clearTimeout(timer);
        };

        window.addEventListener('keydown', handleKeyPress);

        //Cleanup
        return () => {
            clearTimeout(timer);
            window.removeEventListener('keydown', handleKeyPress);

        }
    }, [onEndWaiting, onTooSoon]);

    return (
        <S.Lobby>
            <CircularProgress />
        </S.Lobby>
    );
};

export default Waiting;
