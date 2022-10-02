import { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import React from 'react';
import sticky from '../public/sticky_assets/blue_sticky.png';

export default function createPage() {
    const canvasRef = useRef<any>(null);

    const [colour, setColour] = useState("");
    const [brushColour, setBrushColour] = useState("#222222");

    const saveSticky = () => {
        console.log(canvasRef.current.getSaveData());
    }

    const selectPurple = () => {
        setBrushColour("#7e22ce")
    }

    const selectRed = () => {
        setBrushColour("#e11d48")
    }

    const selectGreen = () => {
        setBrushColour("#16a34a")
    }

    const selectBlack = () => {
        setBrushColour("#222222")
    }

    return (

        <div className="flex flex-col items-center">
            <button onClick={saveSticky}>
                Save
            </button>

            <p>Brush Colour</p>
            <div className="flex my-2 py-1.5">
                <button className="bg-purple-700 ring-purple-400 
                mx-1.5 rounded-full hover:ring-4 
                focus:border-stone-900 focus:ring-2 focus:outline-dotted focus:outline-offset-4"
                    onClick={selectPurple}>
                    <svg height="40" width="40" />
                </button>

                <button className="bg-rose-600 ring-rose-400 
                                mx-1.5 rounded-full hover:ring-4 
                                focus:border-stone-900 focus:ring-2 focus:outline-dotted focus:outline-offset-4"
                    onClick={selectRed}>
                    <svg height="40" width="40" />
                </button>

                <button className="bg-green-600 ring-green-400
                mx-1.5 rounded-full hover:ring-4 
                focus:border-stone-900 focus:ring-2 focus:outline-dotted focus:outline-offset-4"
                    onClick={selectGreen}>
                    <svg height="40" width="40" />
                    <circle cx="50" cy="50" r="40" stroke="white" stroke-width="10" fill="#e11d48" />
                </button>

                <button className="bg-stone-900 ring-stone-400
                mx-1.5 rounded-full hover:ring-4 
                focus:border-stone-900 focus:ring-2 focus:outline-dotted focus:outline-offset-4"
                    onClick={selectBlack}>
                    <svg height="40" width="40" />
                    <circle cx="50" cy="50" r="40" stroke="white" stroke-width="10" fill="#e11d48" />
                </button>
            </div>

            <div className="border-2">
                <CanvasDraw
                    ref={canvasRef}
                    hideGrid={true}
                    lazyRadius={4}
                    brushColor={brushColour}
                    brushRadius={7}
                />
            </div>

            <p>Sticky Colour</p>
            <div className="flex my-2 py-1.5">
                <button className="bg-orange-600 ring-orange-200 
                mx-1.5 rounded-full hover:ring-4 
                focus:border-stone-900 focus:ring-2 focus:outline-dotted focus:outline-offset-4"
                    onClick={selectPurple}>
                    <svg height="40" width="40" />
                </button>

                <button className="bg-rose-600 ring-rose-400 
                                mx-1.5 rounded-full hover:ring-4 
                                focus:border-stone-900 focus:ring-2 focus:outline-dotted focus:outline-offset-4"
                    onClick={selectRed}>
                    <svg height="40" width="40" />
                </button>

                <button className="bg-green-600 ring-green-400
                mx-1.5 rounded-full hover:ring-4 
                focus:border-stone-900 focus:ring-2 focus:outline-dotted focus:outline-offset-4"
                    onClick={selectGreen}>
                    <svg height="40" width="40" />
                    <circle cx="50" cy="50" r="40" stroke="white" stroke-width="10" fill="#e11d48" />
                </button>

                <button className="bg-stone-900 ring-stone-400
                mx-1.5 rounded-full hover:ring-4 
                focus:border-stone-900 focus:ring-2 focus:outline-dotted focus:outline-offset-4"
                    onClick={selectBlack}>
                    <svg height="40" width="40" />
                    <circle cx="50" cy="50" r="40" stroke="white" stroke-width="10" fill="#e11d48" />
                </button>
            </div>
        </div>

    );
}