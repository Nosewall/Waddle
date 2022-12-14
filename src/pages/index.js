import { useEffect, useState } from 'react';
import { useAuth } from '../components/context/AuthContext';
import { useRouter } from 'next/router';
import Sticky from '../components/home/Sticky';
import HamburgerMenu from '../components/nav/hamburgerMenu';
import axiosBase from './axiosBase';

export default function Home() {
    const router = useRouter();
    const { CheckSession, GetUserId } = useAuth();

    const [stickies, setStickies] = useState([]);

    useEffect(() => {
        if (!CheckSession()) router.push('/login');
        axiosBase
            .post('/get-messages', { userId: GetUserId() })
            .then((response) => {
                setStickies(response.data);
            });
    }, []);

    return (
        <>
            <HamburgerMenu />
            <div className='flex flex-col items-center page-containe'>
                <p className='font-fun text-2xl my-6'>Your Stickies</p>

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
