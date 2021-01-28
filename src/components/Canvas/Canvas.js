import { useEffect, useRef } from 'react';
import './Canvas.css';

function Canvas(props) {
    const { k1, k2, gyp } = props;

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const sum = +k1 + +k2 + +gyp;
        const values = [
            Math.round(k1 / sum * 100),
            Math.round(k2 / sum * 100),
            Math.round(gyp / sum * 100)
        ];
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = 'white';
        context.beginPath();

        context.moveTo(300, 300);
        context.lineTo(300, (250 / 100) * values[1]);
        context.lineTo((250 / 100) * values[0], (250 / 100) * values[1])
        context.closePath();

        context.lineWidth = 10;
        context.strokeStyle = '#191919';
        context.stroke();

        context.fillStyle = 'white';
        context.fill();
    }, [k1, k2, gyp])

    return <canvas className='calculator__canvas' ref={canvasRef} {...props} />
};

export default Canvas;