import HamburgerMenu from "../components/nav/hamburgerMenu";

function NewEvent() {
    return (
        <>
            <HamburgerMenu/>
            <div className={"border-[1px] border-black text-center font-fun m-5"}>

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

            </div>
        </>
    )
}

export default NewEvent