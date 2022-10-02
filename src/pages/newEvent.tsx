import HamburgerMenu from "../components/nav/hamburgerMenu";
import {motion} from "framer-motion";

function NewEvent() {
    return (
        <>
            <HamburgerMenu/>
            <motion.div
                animate={{opacity: 1, x:0}}
                initial={{opacity:0, x:-200}}
                transition={{duration: .75}}
                className={"border-[1px] border-black text-center font-fun m-5"}>

                <h1 className={"p-2 text-3xl"}>Title</h1>
                <div className={"m-2"}>
                    <input className={"input m-2 text-2xl font-business text-center w-[70%]"}></input>
                </div>

                <h1 className={"p-2 text-3xl"}>When</h1>
                <div className={"m-2"}>
                    <input className={"input m-2 text-2xl font-business text-center w-[70%] "}></input>
                </div>

                <h1 className={"p-2 text-3xl"}>Where</h1>
                <div className={"m-2"}>
                    <input className={"input m-2 text-2xl font-business text-center w-[70%]"}></input>
                </div>

                <h1 className={"p-2 text-3xl"}>Locale</h1>
                <div className={"m-2"}>
                    <select className={"input m-2 text-2xl font-business text-center w-[70%]"}>
                        <option value={"Americas"}>Americas</option>
                        <option value={"Asia"}>Asia</option>
                        <option value={"Europe"}>Europe</option>
                    </select>
                </div>

                <h1 className={"p-2 text-3xl"}>Regionality</h1>
                <div className={"m-2"}>
                    <select className={"input m-2 text-2xl font-business text-center w-[70%]"}>
                        <option value={"Global"}>Global</option>
                        <option value={"Regional"}>Regional</option>
                        <option value={"Local"}>Local</option>
                    </select>
                </div>

                <h1 className={"p-2 text-3xl"}>Description</h1>
                <div className={"m-2"}>
                    <textarea className={"input m-2 text-2xl font-business text-center w-[70%]"}></textarea>
                </div>

                <button className={"button border-[1px] p-1 m-4 border-green-300 rounded-md " +
                    "bg-pastelGreen hover:bg-boldGreen w-[30%] " +
                    "transition-all duration-75"}>Go! </button>

            </motion.div>
        </>
    )
}

export default NewEvent