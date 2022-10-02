import HamburgerMenu from "../components/nav/hamburgerMenu";

function Waddln(){
    return (
        <>
            <HamburgerMenu/>
            <div className={"flex justify-center w-full h-full font-fun align-middle m-4"}>
                <div className={"text-center border-[1px] border-black"}>
                    <h1 className={"p-5 text-3xl"}>Who's Desk are you Waddln' to?</h1>
                    <div className={"m-5"}>
                        <input className={"input m-2 text-2xl font-business text-center"}></input>
                        <button className={"button border-[1px] p-1 m-4 border-green-300 rounded-md " +
                            "bg-pastelGreen hover:bg-boldGreen " +
                            "transition-all duration-75"}>Go! </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Waddln