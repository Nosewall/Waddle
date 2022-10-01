import {useState, useEffect} from "react";
import EventCard from "../components/events/eventCard";

let testEventData = {
    scope: "Local",
    location: "SAP Vancouver",
    time: "4:00PM Pacific",
    title: "SAP Invitational Hackathon",
    body: "This is an invitation only hackathon for only the 1337est of Haxors",
    contactInfo: "778-317-6911",
    //TODO Add image Field
    usersAttending: []
}

function eventsPage(props){

    //The state for the list of events
    const [events, setEvents] = useState([])

    //Grabs all events. For now we'll just set this to my default event
    const fetchEvents = async () => {
        //TODO Actually grab this data from the DB
        const data = [testEventData, testEventData, testEventData, testEventData, testEventData, testEventData, testEventData, testEventData, testEventData, testEventData, ]
        setEvents(data)
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    return (

        <div className="eventsPage bg-slate-50">
            <div className="regionButtons flex justify-evenly w-100 min-h-full">
                <button className={"scopeFilterButtons bg-pastelOrange hover:bg-boldYellow"}>Global</button>
                <button className={"scopeFilterButtons bg-pastelPurple hover:bg-boldPurple"}>Regional</button>
                <button className={"scopeFilterButtons hover:bg-boldBlue"}>Local</button>
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