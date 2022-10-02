import HamburgerMenu from '../components/nav/hamburgerMenu';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../components/context/AuthContext';
import { motion } from 'framer-motion';
import axiosBase from './axiosBase';

const EventForm = Object.freeze({
    scope: 'Global',
    location: '',
    time: '',
    title: '',
    body: '',
    contactInfo: '',
});

function NewEvent() {
    const router = useRouter();
    const { CheckSession } = useAuth();
    const [formData, updateFormData] = useState(EventForm);

    useEffect(() => {
        if (!CheckSession()) router.push('/login');
    }, []);

    const handleChange = (e: any) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = { ...formData };
        axiosBase
            .post('/create-event', data)
            .then((res) => {
                e.reset();
                //toast
            })
            .catch((err) => {
                //bad toast
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
                    'border-[1px] border-black text-center font-fun m-5'
                }>
                <form onSubmit={handleSubmit}>
                    <h1 className={'p-2 text-3xl'}>Scope</h1>
                    <div className={'m-2'}>
                        <select
                            className={
                                'input m-2 text-2xl font-business text-center w-[70%]'
                            }
                            name={'scope'}
                            onChange={handleChange}>
                            <option value={'Global'}>Global</option>
                            <option value={'Regional'}>Regional</option>
                            <option value={'Local'}>Local</option>
                        </select>
                    </div>

                    <h1 className={'p-2 text-3xl'}>Title</h1>
                    <div className={'m-2'}>
                        <input
                            className={
                                'input m-2 text-2xl font-business text-center w-[70%]'
                            }
                            name={'title'}
                            onChange={handleChange}
                        />
                    </div>

                    <h1 className={'p-2 text-3xl'}>When</h1>
                    <div className={'m-2'}>
                        <input
                            className={
                                'input m-2 text-2xl font-business text-center w-[70%] '
                            }
                            placeholder={'Format: YY-MM-DD hh:mm:ss'}
                            name={'time'}
                            onChange={handleChange}
                        />
                    </div>

                    <h1 className={'p-2 text-3xl'}>Where</h1>
                    <div className={'m-2'}>
                        <input
                            className={
                                'input m-2 text-2xl font-business text-center w-[70%]'
                            }
                            name={'location'}
                            onChange={handleChange}
                        />
                    </div>

                    <h1 className={'p-2 text-3xl'}>Description</h1>
                    <div className={'m-2'}>
                        <textarea
                            className={
                                'input m-2 text-2xl font-business text-center w-[70%]'
                            }
                            name={'body'}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        className={
                            'button border-[1px] p-1 m-4 border-green-300 rounded-md ' +
                            'bg-pastelGreen hover:bg-boldGreen w-[30%] ' +
                            'transition-all duration-75'
                        }
                        type={'submit'}
                        name={'submit'}>
                        Go!{' '}
                    </button>
                </form>
            </motion.div>
        </>
    );
}

export default NewEvent;
