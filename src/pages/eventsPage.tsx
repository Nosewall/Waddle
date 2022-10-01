import {useState, useEffect} from "react";
import EventCard from "../components/events/eventCard";

let testEventData = {
    scope: "North America",
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
        const data = [testEventData]
        setEvents(data)
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <div className="eventsPage">
            <div className="regionButtons">
                <button>Global</button>
                <button>Regional</button>
                <button>Local</button>
            </div>
            <div className="eventCards">
                {events.map(event => (
                    <EventCard
                        scope={event.scope}
                        location={event.location}
                        time={event.time}
                        title={event.title}
                        body={event.body}
                        contactInfo={event.contactInfo}
                        usersAttending={event.usersAttending}>
                    </EventCard>
                ))}
            </div>
        </div>
    )
}

export default eventsPage