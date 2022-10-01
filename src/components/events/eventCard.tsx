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

    const fetchAttenting = async () => {
        //TODO Actually grab this data from db
    }

    function getColor(){
        let color = "pastelOrange"
        if(props.scope == "Global"){
            color = "pastelOrange"
        } else if(props.scope == "Regional"){
            color = "pastelPurple"
        } else if(props.scope == "Local"){
            color = "pastelBlue"
        }
        return color
    }
    let color = getColor();

    return (
        <div className={"overflow-hidden rounded-2xl border-black border-[1px] m-3 text-black bg-amber-50 shadow-2xl" }>
            <h1 className={" font-extrabold border-black bottomLine p-1 " + "bg-" + color + ""}>{props.title}</h1>
            <h2 className={"font-bold p-1"}>{props.time}</h2>
            <h2 className={"p-1"}>{props.location}</h2>
            <h3 className={"p-1"}>{props.contactInfo}</h3>
            <h4 className={"p-1"}>{props.body}</h4>
            <div className={"attendingButtons"}>
                <button className={"p1 border-[1px solid black] "}>I'm Attending!</button>

            </div>
        </div>
    )

}

export default EventCard