import HamburgerMenu from "../components/nav/hamburgerMenu";
import { motion } from "framer-motion";

function NewEvent() {
    return (
        <>
            <HamburgerMenu />
            <div className='flex flex-col items-center page-container'>


                <p className='font-fun text-2xl my-6'>Add New Event</p>

                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ duration: .75 }}
                    className={"flex flex-col items-center border-[1px] border-black text-center font-fun p-5 rounded-2xl w-96"}>

                    <label className="font-fun mt-2">Event Name</label>
                        <input className={"input m-2 text-lg font-business text-center w-[100%]"}></input>

                    <label className="font-fun mt-2">When</label>
                        <input className={"input m-2 text-lg font-business text-center w-[100%]"}></input>

                    <label className="font-fun">Where</label>
                        <input className={"input m-2 text-lg font-business text-center w-[100%]"}></input>

                    <label className="font-fun mt-2">Locale</label>
                        <select className={"input m-2 font-business text-center w-[100%]"}>
                            <option value={"Americas"}>Americas</option>
                            <option value={"Asia"}>Asia</option>
                            <option value={"Europe"}>Europe</option>
                        </select>

                    <label className="font-fun mt-2">Regionality</label>
                        <select className={"input m-2 font-business text-center w-[100%]"}>
                            <option value={"Global"}>Global</option>
                            <option value={"Regional"}>Regional</option>
                            <option value={"Local"}>Local</option>
                        </select>

                    <label className="font-fun mt-2">Description</label>
                        <textarea 
                        className="input m-2 font-business text-center w-[100%]"></textarea>

                    <button className={"button border-[1px] p-1 m-4 border-green-300 rounded-md " +
                        "bg-pastelGreen hover:bg-boldGreen w-[50%] " +
                        "transition-all duration-75"}>Add Event! </button>

                </motion.div>
            </div>
        </>
    )
}

export default NewEvent