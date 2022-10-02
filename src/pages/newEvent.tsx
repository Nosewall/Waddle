import HamburgerMenu from '../components/nav/hamburgerMenu';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../components/context/AuthContext';
import { motion } from 'framer-motion';
import { Toast } from 'flowbite-react';

function NewEvent() {
    const router = useRouter();
    const { CheckSession } = useAuth();
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        // if (!CheckSession()) router.push('/login');
    }, []);

    const submitForm = () => {
        errorToast();
    }

    const successToast = () => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    }

    const errorToast = () => {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
    }

    return (
        <>
            <HamburgerMenu />
            <div className='flex flex-col items-center page-container'>

            {showSuccess && (
                    <div className="fixed z-30">
                        <Toast>
                            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-boldPurple text-blue-500 dark:bg-blue-800 dark:text-blue-200">
                                🎉
                            </div>
                            <div className="ml-3 text-sm font-normal">
                               Event Added Successfully!
                            </div>
                        </Toast>
                    </div>
                )}

                {showError && (
                    <div className="fixed z-30">
                        <Toast>
                            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
                                🐻
                            </div>
                            <div className="ml-3 text-sm font-normal">
                                Bad news bears! <br/> Something went wrong.
                            </div>
                        </Toast>
                    </div>
                )}


                <p className='font-fun text-2xl my-6'>Add New Event</p>

                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ duration: .75 }}
                    className={"flex flex-col items-center border-[1px] border-black text-center font-fun p-5 rounded-2xl w-96"}>

                    <label className="font-business mt-2">Event Name</label>
                        <input className={"input m-2 text-lg font-business text-center w-[100%]"}></input>

                    <label className="font-business mt-2">When</label>
                        <input className={"input m-2 text-lg font-business text-center w-[100%]"}></input>

                    <label className="font-business mt-2">Where</label>
                        <input className={"input m-2 text-lg font-business text-center w-[100%]"}></input>

                    <label className="font-business mt-2">Locale</label>
                        <select className={"input m-2 font-business text-center w-[100%]"}>
                            <option value={"Americas"}>Americas</option>
                            <option value={"Asia"}>Asia</option>
                            <option value={"Europe"}>Europe</option>
                        </select>

                    <label className="font-business mt-2">Regionality</label>
                        <select className={"input m-2 font-business text-center w-[100%]"}>
                            <option value={"Global"}>Global</option>
                            <option value={"Regional"}>Regional</option>
                            <option value={"Local"}>Local</option>
                        </select>

                    <label className="font-business mt-2">Description</label>
                        <textarea 
                        className="input m-2 font-business text-center w-[100%]"></textarea>

                    <button className={"button border-[1px] p-1 m-4 rounded-md " +
                        "bg-pastelTangerine scopeFilterButtons hover:bg-orange-500 w-[50%] " +
                        "transition-all duration-75"} onClick={submitForm}>Add Event! </button>

                </motion.div>
            </div>
        </>
    );
}

export default NewEvent;
