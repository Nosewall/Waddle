import { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import React from 'react';
import sticky from '../public/sticky_assets/blue_sticky.png';

export default function createPage() {

    const YELLOW_STICKY = "https://i.imgur.com/0xNiaGS.png"
    const PINK_STICKY = "https://i.imgur.com/m6QhPwq.png"
    const GREEN_STICKY = "https://i.imgur.com/JwVnDO6.png"
    const BLUE_STICKY = "https://i.imgur.com/q936lU4.png"

    const canvasRef = useRef<any>(null);

    const [brushColour, setBrushColour] = useState("#222222");
    const [stickyColour, setStickyColour] = useState(YELLOW_STICKY);

    const saveSticky = () => {
        console.log(canvasRef.current.getSaveData());
        console.log(stickyColour);
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

    const yellowSticky = () => {
        setStickyColour(YELLOW_STICKY);
    }

    const pinkSticky = () => {
        setStickyColour(PINK_STICKY);
    }

    const greenSticky = () => {
        setStickyColour(GREEN_STICKY);
    }

    const blueSticky = () => {
        setStickyColour(BLUE_STICKY);
    }

    return (

        <div className="flex flex-col items-center">
            <p className="font-fun text-xl">Draft Your Sticky</p>

            <div className="flex flex-col my-5 items-center">
                <p className="font-fun">Brush Colour</p>
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
            </div>

            <div className="border-2 p-0.5">
                <CanvasDraw
                    ref={canvasRef}
                    hideGrid={true}
                    lazyRadius={4}
                    brushColor={brushColour}
                    brushRadius={7}
                    imgSrc={stickyColour}
                />
            </div>

            <div className="flex flex-col my-5 items-center">
                <p>Sticky Colour</p>

                <div className="flex my-2 py-1.5">
                    <button className="bg-pastelYellow ring-orange-400 
                mx-1.5 rounded-full hover:ring-4 
                focus:border-stone-900 focus:ring-2 focus:outline-dotted focus:outline-offset-4"
                        onClick={yellowSticky}>
                        <svg height="40" width="40" />
                    </button>

                    <button className="bg-pastelRed ring-rose-600 
                                mx-1.5 rounded-full hover:ring-4 
                                focus:border-stone-900 focus:ring-2 focus:outline-dotted focus:outline-offset-4"
                        onClick={pinkSticky}>
                        <svg height="40" width="40" />
                    </button>

                    <button className="bg-boldCyan ring-green-500
                mx-1.5 rounded-full hover:ring-4 
                focus:border-stone-900 focus:ring-2 focus:outline-dotted focus:outline-offset-4"
                        onClick={greenSticky}>
                        <svg height="40" width="40" />
                        <circle cx="50" cy="50" r="40" stroke="white" stroke-width="10" fill="#e11d48" />
                    </button>

                    <button className="bg-pastelBlue ring-blue-400
                mx-1.5 rounded-full hover:ring-4 
                focus:border-stone-900 focus:ring-2 focus:outline-dotted focus:outline-offset-4"
                        onClick={blueSticky}>
                        <svg height="40" width="40" />
                        <circle cx="50" cy="50" r="40" stroke="white" stroke-width="10" fill="#e11d48" />
                    </button>
                </div>
            </div>

            <button className="font-fun bg-pastelTangerine scopeFilterButtons hover:bg-orange-500"
            onClick={saveSticky}>
                Post it!
            </button>
        </div>

    );
}