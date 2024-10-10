import { useState, useEffect } from 'react';

interface TimerProps {
    initialTime: number;
    onTimeUp: () => void;
}

const Timer = ({ initialTime, onTimeUp }: TimerProps) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            onTimeUp();
        }
    }, [timeLeft, onTimeUp]);

    return (
        <div>
            Time Left: {timeLeft}s
        </div>
    );
};

export default Timer;
