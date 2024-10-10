import { useState } from 'react';
import axios from 'axios';
import Waiting from './Waiting';
import Game from './Game';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "./style";
import { GameState, stateFeedbackMap } from '../../types';
import Timer from '../../components/timer/Timer';

const URL = "http://localhost:8080/api/users";
const TIMER_SECONDS = 30;

const GameLobby = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [waiting, setWaiting] = useState(true);
    const [feedback, setFeedback] = useState<GameState | null>(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const userName = location.state?.userName;


    const handleEndWaiting = () => {
        setWaiting(false);
        setFeedback(null);
    };

    const handleFeedback = (feedbackMessage: GameState) => {
        if (feedbackMessage === GameState.Success) {
            setScore(score + 1);
        }
        setFeedback(feedbackMessage);
        setWaiting(true);
    };

    const handleTooSoon = () => {
        setFeedback(GameState.TooEarly);
        setWaiting(true);
    };

    const handleTimeUp = async () => {
        setGameOver(true);
        setFeedback(null);
        try {
            await axios.post(`${URL}/create`, {
                name: userName,
                score: score.toString(),
            });
        } catch (error) {
            console.error('Error submitting score:', error);
        }
    };

    return (
        <S.Lobby>
            <h1>Let's Play {userName} </h1>
            {!gameOver && <Timer initialTime={TIMER_SECONDS} onTimeUp={handleTimeUp} />}
            <S.Score>Score: {score}</S.Score>
            <S.Container>
                {gameOver ? (
                    <h2>Game Over! Final Score: {score}</h2>
                ) : waiting ? (
                    <Waiting onEndWaiting={handleEndWaiting} onTooSoon={handleTooSoon} />
                ) : (
                    <Game onFeedback={handleFeedback} />
                )}
            </S.Container>
            {feedback && waiting && <S.Feedback type={stateFeedbackMap[feedback]}>{feedback}</S.Feedback>}
            {gameOver && <button onClick={() => navigate('/')}>Start Over</button>}
        </S.Lobby>
    );
};

export default GameLobby;
