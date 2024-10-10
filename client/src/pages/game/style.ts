import styled from "styled-components";

interface FeedbackProps {
    type: 'error' | 'success';
}

interface IndicatorProps {
    position: 'left' | 'right';
}

export const Feedback = styled.p<FeedbackProps>`
margin-top: 20px;
font-size: 20px;
${({ type }) => (type === 'success' ? 'color: green;' : 'color: red;')}`

export const Score = styled.div`
    margin-top: 10px;
    font-size: 24px;
`;

export const Screen = styled.div`
    margin-top: 50px;
`
export const Container = styled.div`
    position: relative;
    height: 300px;
    width: 90%;
    border: 1px solid #ccc;
    margin: 20px;
    padding:8px;`

export const Indicator = styled.div<IndicatorProps>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ position }) => (position === 'left' ? 'left: 20%;' : 'right: 20%;')}`

export const Circle = styled.div`
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 50%;`

export const Lobby = styled.div`
display:flex;
flex-direction:column;
align-items:center`
