import React, { FunctionComponent } from 'react'; // importing FunctionComponent

type EventProps = {
    regionality: string,
    location: string,
    time: string,
    title: string,
    body: string,
    contactInfo: string,
    //TODO Add image Field
    usersAttending: []
}

class EventCard extends React.Component {
    render(){
        return <div>
            <h1>Hello, {this.props.title}</h1>
        </div>
    }
}