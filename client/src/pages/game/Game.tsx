import { useState, useEffect } from 'react';
import * as S from "./style";
import { GameState, IndicatorPosition, positionKeyMap } from '../../types';


interface Props {
    onFeedback: (feedback: GameState) => void;
}

const Game = ({ onFeedback }: Props) => {
    const [indicatorPosition, setIndicatorPosition] = useState<IndicatorPosition>(IndicatorPosition.Left);

    useEffect(() => {
        const position = Math.random() < 0.5 ? IndicatorPosition.Left : IndicatorPosition.Right;
        setIndicatorPosition(position);

        const timer = setTimeout(() => {
            onFeedback(GameState.TooLate);
        }, 1000);

        return () => clearTimeout(timer);
    }, [onFeedback]);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const expectedKey = positionKeyMap[indicatorPosition];
            if (event.key === expectedKey) {
                onFeedback(GameState.Success);
            } else {
                onFeedback(GameState.Mistake);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [indicatorPosition, onFeedback]);

    return (
        <S.Indicator position={indicatorPosition}>
            <S.Circle />
        </S.Indicator>
    );
};

export default Game;
