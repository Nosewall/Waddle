import {useState, useEffect} from "react";
import EventCard from "../components/events/eventCard";

let testEventData = {
    scope: "Global",
    location: "SAP Vancouver",
    time: "4:00PM Pacific",
    title: "SAP Invitational Hackathon",
    body: "This is an invitation only hackathon for only the 1337est of Haxors",
    contactInfo: "778-317-6911",
    //TODO Add image Field
    usersAttending: []
}

let testLocalData = {
    scope: "Local",
    location: "SAP Vancouver",
    time: "4:00PM Pacific",
    title: "SAP Invitational Hackathon",
    body: "This is an invitation only hackathon for only the 1337est of Haxors",
    contactInfo: "778-317-6911",
    //TODO Add image Field
    usersAttending: []
}

let testRegionalData = {
    scope: "Regional",
    location: "SAP Vancouver",
    time: "4:00PM Pacific",
    title: "SAP Invitational Hackathon",
    body: "This is an invitation only hackathon for only the 1337est of Haxors",
    contactInfo: "778-317-6911",
    //TODO Add image Field
    usersAttending: []
}

function eventsPage(props){

    let pageLoaded = false

    //The state for the list of events
    const [events, setEvents] = useState([])
    const [allevents, setAllEvents] = useState([])


    const fetchAllEvents = async () => {
        //TODO Actually grab this data from the DB
        const data = [testEventData, testLocalData, testRegionalData, testEventData, testEventData, testEventData, testEventData, testEventData, testEventData, testEventData, ]
        setEvents(data)
        setAllEvents(data)
    }

    function filterList(newFilter){
        let newEventsList = []
        switch (newFilter){
            case "Global":
                for(let i = 0; i < allevents.length; i++){
                    if(allevents[i].scope == "global"){

                    }
                }
            case "Regional":
                break
            case "Local":
                break
        }
    }



    useEffect(() => {
        if(!pageLoaded){
            pageLoaded = true
            fetchAllEvents()
        }
    }, [])

    return (

        <div className="eventsPage bg-slate-50">
            <div className="font-fun font-extrabold regionButtons flex justify-evenly w-100 min-h-full">
                <button className={"scopeFilterButtons bg-pastelOrange hover:bg-darkOrange"}>Global</button>
                <button className={"scopeFilterButtons bg-pastelPurple hover:bg-boldPurple"}>Regional</button>
                <button className={"scopeFilterButtons bg-pastelBlue hover:bg-boldBlue"} onClick={filterList("Global")}>Local</button>
            </div>
            <div>
                {events.map(event => (
                    <EventCard
                        scope={event.scope}
                        location={event.location}
                        time={event.time}
                        title={event.title}
                        body={event.body}
                        contactInfo={event.contactInfo}
                        usersAttending={event.usersAttending}>
                        {props.children}
                    </EventCard>
                ))}
            </div>
        </div>
    )
}

export default eventsPage