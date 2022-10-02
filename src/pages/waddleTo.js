import { useEffect, useState } from 'react';
import { useAuth } from '../components/context/AuthContext';
import { useRouter } from 'next/router';
import Sticky from '../components/home/Sticky';
import HamburgerMenu from '../components/nav/hamburgerMenu';
import axiosBase from './axiosBase';

export default function waddleTo() {
    const router = useRouter();
    const { CheckSession, GetUserId } = useAuth();

    const [stickies, setStickies] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        if (!CheckSession()) router.push('/login');
        const data = router.query;
        setName(data.email.split('@')[0]);
        axiosBase
            .post('/get-others-messages', data)
            .then((response) => {
                setStickies(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <HamburgerMenu />
            <div className='flex flex-col items-center page-containe'>
                <p className='font-fun text-2xl my-6'>{name}'s Stickies</p>

                <div>
                    {stickies.map((sticky, i) => (
                        <Sticky
                            key={i}
                            colour={sticky.bodyColour}
                            drawingData={sticky.body.replace(/'/g, '"')}
                            senderName={sticky.senderName}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
