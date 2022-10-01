import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { useEffect, useState } from 'react';

type EventProps = {
    scope: string,
    location: string,
    time: string,
    title: string,
    body: string,
    contactInfo: string,
    //TODO Add image Field
    usersAttending: [],
    children: React.ReactNode
}



function EventCard(props : EventProps) {

    const [attending, setAttending] = useState([])
    const [color, setColor] = useState([])
    const [attendanceColor, setAttendance] = useState([])

    const fetchAttenting = async () => {
        //TODO Actually grab this data from db
        setAttending(["I'm Attending!", true])
    }
    const getAttendanceColor = async () => {
        setAttendance([attending[1]] ? ["rose-300", "boldPink"] : ["boldCyan", "darkCyan"])
    }
    const getColor = async () => {
        let color = "pastelOrange"
        if(props.scope == "Global"){
            color = "pastelOrange"
        } else if(props.scope == "Regional"){
            color = "pastelPurple"
        } else if(props.scope == "Local"){
            color = "pastelBlue"
        }
        setColor([color])
    }

    useEffect(() =>{
        fetchAttenting().then()
        getColor().then()
        getAttendanceColor().then()
    }, [])

    return (
        <div className={"overflow-hidden bg-green-200 rounded-2xl border-black border-[1px] m-3 text-black bg-amber-50 " }>
            <div id={"colorDiv bg-boldRed bg-boldGreen bg-boldPink bg-boldCyan bg-emerald-300 bg-rose-300"}></div>
            <h1 className={" font-extrabold border-black bottomLine p-1 " + "bg-" + color + ""}>{props.title}</h1>
            <h2 className={"font-bold p-1"}>{props.time}</h2>
            <h2 className={"p-1"}>{props.location}</h2>
            <h3 className={"p-1"}>{props.contactInfo}</h3>
            <h4 className={"p-1"}>{props.body}</h4>
            <div className={"flex justify-center"}>
                <button className={"p-1 m-3 " +
                    " shadow-md border-[1px] border-black font-bold shadow-med " +
                    " bg-" + attendanceColor[0] + " hover:bg-darkOrange " +
                    " rounded-lg"}>{attending[0]}</button>

            </div>
        </div>
    )

}

export default EventCard