import { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';

type StickyProps = {
    colour: string,
    drawingData: string,
    senderName: string,
}

export default function Sticky(props: StickyProps) {

    const StickyBG = {
        "Yellow": 'https://i.imgur.com/0xNiaGS.png',
        "Pink": 'https://i.imgur.com/m6QhPwq.png',
        "Green": 'https://i.imgur.com/JwVnDO6.png',
        "Blue": 'https://i.imgur.com/q936lU4.png',
    }

    const { colour, drawingData, senderName } = props;

    return (
        <div className="m-3">

            <p className="font-fun pl-3 py-2">{'From: ' + senderName}</p>

            <CanvasDraw
                disabled={true}
                immediateLoading={false}
                saveData={drawingData}
                imgSrc={StickyBG[colour]}
            />
        </div>
    )
}