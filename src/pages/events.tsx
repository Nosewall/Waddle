import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../components/context/AuthContext';
import EventCard from '../components/events/eventCard';
import HamburgerMenu from '../components/nav/hamburgerMenu';
import axiosBase from './axiosBase';
import { motion } from 'framer-motion';

let testEventData = {
    scope: 'Global',
    location: 'SAP Vancouver',
    time: '4:00PM Pacific',
    title: 'SAP Invitational Hackathon',
    body: 'This is an invitation only hackathon for only the 1337est of Haxors',
    contactInfo: '778-317-6911',
    //TODO Add image Field
    usersAttending: [],
};
let testLocalData = {
    scope: 'Local',
    location: 'Local',
    time: '4:00PM Pacific',
    title: 'SAP Invitational Hackathon',
    body: 'This is an invitation only hackathon for only the 1337est of Haxors',
    contactInfo: '778-317-6911',
    //TODO Add image Field
    usersAttending: [],
};
let testRegionalData = {
    scope: 'Regional',
    location: 'Regional',
    time: '4:00PM Pacific',
    title: 'SAP Invitational Hackathon',
    body: 'This is an invitation only hackathon for only the 1337est of Haxors',
    contactInfo: '778-317-6911',
    //TODO Add image Field
    usersAttending: [],
};
function events({ props }: any) {
    let pageLoaded = false;
    //The state for the list of events
    const [events, setEvents] = useState([]);
    const [allevents, setAllEvents] = useState([]);
    function filterList(newFilter) {
        setEvents([]);
        let newEventsList = [];
        switch (newFilter) {
            case 'Global':
                for (let i = 0; i < allevents.length; i++) {
                    newEventsList.push(allevents[i]);
                }
                break;
            case 'Regional':
                for (let i = 0; i < allevents.length; i++) {
                    if (
                        allevents[i].scope == 'Regional' ||
                        allevents[i].scope == 'Local'
                    ) {
                        newEventsList.push(allevents[i]);
                    }
                }
                break;
            case 'Local':
                for (let i = 0; i < allevents.length; i++) {
                    if (allevents[i].scope == 'Local') {
                        newEventsList.push(allevents[i]);
                    }
                }
                break;
        }
        setEvents(newEventsList);
        console.log(events);
    }

    const { CheckSession } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!CheckSession()) router.push('/login');
        if (!pageLoaded) {
            pageLoaded = true;
            //fetchAllEvents();
        }
        axiosBase.get('/get-all-events').then((response) => {
            setEvents(response.data);
            setAllEvents(response.data);
            console.log(response.data);
        });
    }, []);

    const variantForChildren ={
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    return (
        <>
            <HamburgerMenu />
            <div className='flex flex-col items-center page-container'>
                <p className='font-fun text-2xl my-6'>Events</p>
                <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.75 }}
                    className='font-fun font-extrabold regionButtons flex justify-evenly w-100 min-h-full'>
                    <button
                        className={
                            'scopeFilterButtons bg-pastelOrange hover:bg-darkOrange mx-10'
                        }
                        onClick={() => filterList('Global')}>
                        Global
                    </button>
                    <button
                        className={
                            'scopeFilterButtons bg-pastelPurple hover:bg-boldPurple mx-10'
                        }
                        onClick={() => filterList('Regional')}>
                        Regional
                    </button>
                    <button
                        className={
                            'scopeFilterButtons bg-pastelBlue hover:bg-boldBlue mx-10'
                        }
                        onClick={() => filterList('Local')}>
                        Local
                    </button>
                </motion.div>
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.75 }}
                    variants={variantForChildren}>
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            scope={event.scope}
                            location={event.location}
                            time={event.time}
                            title={event.title}
                            body={event.body}
                            contactInfo={event.contactInfo}
                        />
                    ))}
                </motion.div>
            </div>
        </>
    );
}

export default events;
