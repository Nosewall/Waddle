import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type EventProps = {
    scope: string;
    location: string;
    time: string;
    title: string;
    body: string;
    contactInfo: string;
};

function EventCard(props: EventProps) {
    const getColor = (scope) => {
        if (scope == 'Global') {
            return 'pastelOrange';
        } else if (scope == 'Regional') {
            return 'pastelPurple';
        } else if (scope == 'Local') {
            return 'pastelBlue';
        }
    };

    useEffect(() => {
        getColor(props);
    }, []);

    const styles = {
        dynamicColor:
            'hover:bg-pastelGreen bg-greySelect hover:bg-greySelect colorDiv bg-darkCyan hover:bg-boldPink hover:bg-darkCyan bg-boldRed bg-pastelRed bg-boldGreen hover:bg-boldPink bg-boldCyan bg-emerald-300 bg-rose-300',
    };

    const eventAnimation = {
        hidden: {
            scale: 0.7,
            x: -100,
            opacity: 0,
        },
        show: {
            scale: 1,
            x: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div
            transition={{ duration: 0.75 }}
            variants={eventAnimation}
            className={
                'overflow-hidden bg-green-200 rounded-2xl border-black border-[1px] m-3 text-black bg-amber-50 '
            }>
            <div id={styles.dynamicColor}></div>
            <h1
                className={
                    'font-extrabold text-xl font-fun border-black bottomLine p-2 ' +
                    'bg-' +
                    getColor(props.scope) +
                    ''
                }>
                {props.title}
            </h1>
            <div className='p-3'>
                <h2 className={'font-bold font-business p-1'}>{props.time}</h2>
                <h2 className={'p-1 font-business'}>{props.location}</h2>
                <h3 className={'p-1 font-business'}>{props.contactInfo}</h3>
                <h4 className={'p-1 font-business'}>{props.body}</h4>
            </div>
        </motion.div>
    );
}

export default EventCard;
