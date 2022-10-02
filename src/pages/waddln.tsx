import HamburgerMenu from '../components/nav/hamburgerMenu';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../components/context/AuthContext';
import { useRouter } from 'next/router';

const WaddleForm = Object.freeze({
    email: '',
});

function Waddln() {
    const [formData, updateFormData] = useState(WaddleForm);
    const { CheckSession } = useAuth();
    const router = useRouter();

    const handleChange = (e: any) => {
        if (!CheckSession()) router.push('/login');
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    return (
        <>
            <HamburgerMenu />
            <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 0.75 }}
                className={
                    'flex justify-center w-[95%] h-full font-fun align-middle m-5'
                }>
                <div
                    className={
                        'text-center border-[1px] border-black rounded-xl'
                    }>
                    <h1 className={'p-5 text-3xl'}>
                        Who's Desk are you Waddln' to?
                    </h1>
                    <div className={'m-5'}>
                        <input
                            className={
                                'input m-2 text-2xl font-business text-center'
                            }
                            placeholder={'abc@test.com'}
                            name={'email'}
                            onChange={handleChange}
                        />
                        <Link
                            href={{
                                pathname: '/waddleTo',
                                query: { email: formData.email },
                            }}
                            className={
                                'button border-[1px] p-1 m-4 border-green-300 rounded-md ' +
                                'bg-pastelGreen hover:bg-boldGreen ' +
                                'transition-all duration-75'
                            }>
                            <a>Go! </a>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Waddln;
