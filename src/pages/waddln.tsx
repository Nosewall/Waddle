import HamburgerMenu from "../components/nav/hamburgerMenu";
import {motion} from "framer-motion";

function Waddln(){
    return (
        <>
            <HamburgerMenu/>
            <motion.div
                animate={{opacity: 1, x:0}}
                initial={{opacity:0, x:-200}}
                transition={{duration: .75}}
                className={"flex justify-center w-full h-full font-fun align-middle m-5"}>
                <div className={"text-center border-[1px] border-black rounded-xl"}>
                    <h1 className={"p-5 text-3xl"}>Who's Desk are you Waddln' to?</h1>
                    <div className={"m-5"}>
                        <input className={"input m-2 text-2xl font-business text-center"}></input>
                        <button className={"button border-[1px] p-1 m-4 border-green-300 rounded-md " +
                            "bg-pastelGreen hover:bg-boldGreen " +
                            "transition-all duration-75"}>Go! </button>
                    </div>

                </div>
            </motion.div>
        </>
    )
}

export default Waddln