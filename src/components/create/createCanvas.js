import { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';

export default function createCanvas() {
    const canvasRef = useRef<any>(null);
    const [colour, setColour] = useState("");
    const [brushColour, setBrushColour] = useState("#222222");
    
    const saveSticky = () => {
        console.log(canvasRef.current.getSaveData());
    }

    return (
        <>
                'hello!'
                <CanvasDraw
                    ref={canvasRef}
                    imgSrc={colour}
                    brushColour={brushColour}
                />
        
        </>

    );
}