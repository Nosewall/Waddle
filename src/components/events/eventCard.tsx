import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { useEffect, useState } from 'react';
import {router} from "next/client";
import eventsPage from "../../pages/eventsPage";

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
        console.log(attending)
    }
    const getAttendanceColor = async () => {
        if(!attending[1]){
            setAttendance(["greySelect", "pastelGreen"] )
        }else{
            setAttendance(["boldGreen", "pastelGreen"])
        }

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

    const switchAttendance = async () => {
        console.log("Switching Attendance!")
        console.log("Current Attendance: ")
        console.log(attending);
        setAttending(["I'm Not Attending Anymore!", false])
        getAttendanceColor().then(()  => {
            console.log("Attendance after switch:")
            console.log(attending)
        });

    }


    const styles = {
        dynamicColor: "hover:bg-pastelGreen bg-greySelect hover:bg-greySelect colorDiv bg-darkCyan hover:bg-boldPink hover:bg-darkCyan bg-boldRed bg-pastelRed bg-boldGreen hover:bg-boldPink bg-boldCyan bg-emerald-300 bg-rose-300"
    }

    return (
        <div className={"overflow-hidden bg-green-200 rounded-2xl border-black border-[1px] m-3 text-black bg-amber-50 " }>
            <div id={styles.dynamicColor}></div>
            <h1 className={"font-extrabold text-xl font-fun border-black bottomLine p-1 " + "bg-" + color + ""}>{props.title}</h1>
            <h2 className={"font-bold font-business p-1"}>{props.time}</h2>
            <h2 className={"p-1 font-business"}>{props.location}</h2>
            <h3 className={"p-1 font-business"}>{props.contactInfo}</h3>
            <h4 className={"p-1 font-business"}>{props.body}</h4>
            <div className={"flex justify-center"}>
                <button className={"p-1 m-3 font-fun hover:transition-5s eventConfirmationButton " +
                    " shadow-md border-[1px] border-black font-bold shadow-med transition-duration: 150ms;" +
                    " bg-" + attendanceColor[0] + " hover:bg-" + attendanceColor[1] +
                    " rounded-lg"} onClick={switchAttendance}>{attending[0]}</button>

            </div>
        </div>
    )

}


export default EventCard