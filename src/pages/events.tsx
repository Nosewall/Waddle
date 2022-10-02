import { useState, useEffect } from "react";
import EventCard from "../components/events/eventCard";
import HamburgerMenu from "../components/nav/hamburgerMenu";

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
    location: "Local",
    time: "4:00PM Pacific",
    title: "SAP Invitational Hackathon",
    body: "This is an invitation only hackathon for only the 1337est of Haxors",
    contactInfo: "778-317-6911",
    //TODO Add image Field
    usersAttending: []
}
let testRegionalData = {
    scope: "Regional",
    location: "Regional",
    time: "4:00PM Pacific",
    title: "SAP Invitational Hackathon",
    body: "This is an invitation only hackathon for only the 1337est of Haxors",
    contactInfo: "778-317-6911",
    //TODO Add image Field
    usersAttending: []
}
function events(props) {
    let pageLoaded = false
    //The state for the list of events
    const [events, setEvents] = useState([])
    const [allevents, setAllEvents] = useState([])
    const fetchAllEvents = async () => {
        //TODO Actually grab this data from the DB
        const data = [testEventData, testLocalData, testRegionalData]
        setEvents(data)
        setAllEvents(data)
    }
    function filterList(newFilter) {
        setEvents([])
        let newEventsList = []
        switch (newFilter) {
            case "Global":
                for (let i = 0; i < allevents.length; i++) {
                    newEventsList.push(allevents[i])
                }
                break;
            case "Regional":
                for (let i = 0; i < allevents.length; i++) {
                    if (allevents[i].scope == "Regional" || allevents[i].scope == "Local") {
                        newEventsList.push(allevents[i])
                    }
                }
                break;
            case "Local":
                for (let i = 0; i < allevents.length; i++) {
                    if (allevents[i].scope == "Local") {
                        newEventsList.push(allevents[i])
                    }
                }
                break;
        }
        setEvents(newEventsList)
        console.log(events)
    }
    useEffect(() => {
        if (!pageLoaded) {
            pageLoaded = true
            fetchAllEvents()
        }
    }, [])

    return (
        <>
            <HamburgerMenu></HamburgerMenu>
            <div className="flex flex-col items-center">
                <p className='font-fun text-2xl my-6'>Events</p>
                <div className="font-fun font-extrabold regionButtons flex justify-evenly w-100 min-h-full">
                    <button className={"scopeFilterButtons bg-pastelOrange hover:bg-darkOrange mx-10"} onClick={() => filterList("Global")}>Global</button>
                    <button className={"scopeFilterButtons bg-pastelPurple hover:bg-boldPurple mx-10"} onClick={() => filterList("Regional")}>Regional</button>
                    <button className={"scopeFilterButtons bg-pastelBlue hover:bg-boldBlue mx-10"} onClick={() => filterList("Local")}>Local</button>
                </div>
                <div>
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
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
        </>

    )
}

export default events


