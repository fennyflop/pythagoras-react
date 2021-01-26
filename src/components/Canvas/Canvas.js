import { useEffect, useRef } from 'react';

function Canvas(props) {
    const { k1, k2, gyp } = props;

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        const sum = k1 + k2 + gyp;

        const v1 = Math.round(k1 / sum * 100);
        const v2 = Math.round(k2 / sum * 100);
        const vGyp = Math.round(gyp / sum * 100);
        const values = [v1, v2, vGyp];

        context.beginPath();
        context.moveTo(120, 120);
        context.lineTo(120, (250 / 100) * values[1]);
        context.lineTo((350 / 100) * values[0], (350 / 100) * values[1])
        // context.lineTo(100, 300);
        context.closePath();

        // the outline
        context.lineWidth = 10;
        context.strokeStyle = '#666666';
        context.stroke();

        // the fill color
        context.fillStyle = "#FFCC00";
        context.fill();
    }, [k1, k2, gyp])

    return <canvas className={`calculator__canvas ${props.ishidden ? 'calculator__canvas-none' : ''}`} ref={canvasRef} {...props} />
};

export default Canvas;