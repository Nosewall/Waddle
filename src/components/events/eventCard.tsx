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


    return (
        <div className={"rounded-3xl text-red-600 bg-amber-600 "}>
            <h1 className={""}>Hello, {props.title}</h1>
            <h2>{props.time}</h2>
            <h2>{props.title}</h2>
            <h4>{props.body}</h4>
        </div>
    )

}

export default EventCard