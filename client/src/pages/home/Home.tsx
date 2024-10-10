import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "./style";


const Home = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/game', { state: { userName } });

    };

    return (
        <S.Home>
            <h1>Welcome to Reaction Game</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleStart} disabled={userName.length === 0}>START</button>
        </S.Home>
    );
};

export default Home;
