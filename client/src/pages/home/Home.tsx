import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "./style";


const Home = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        if (userName.trim()) {
            navigate('/game', { state: { userName } });
        }
    };

    return (
        <S.Home>
            <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleStart}>START</button>
        </S.Home>
    );
};

export default Home;
