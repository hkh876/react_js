import { memo } from 'react';
import "../styles/Ball.css";

const Ball = memo((props) => {
    const number = props.number;
    let className = 'ball ';

    if (number <= 10) {
        className += 'color-burlywood';
    } else if (number <= 20) {
        className += 'color-blue';
    } else if (number <= 30) {
        className += 'color-red';
    } else if (number <= 40) {
        className += 'color-black';
    } else {
        className += 'color-green';
    }

    return (
        <span className={className}>{props.number}</span>
    );
});

export default Ball;