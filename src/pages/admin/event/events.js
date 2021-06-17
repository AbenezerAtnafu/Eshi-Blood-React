import {React, useState} from 'react';
import { Form, Input, Button, Typography, Card } from "antd";
import EventCard from "../../../components/user/event-card";
import Header from "../../../components/user/header";

const EventsPage = () => {

  const [event, setEvent] = useState([
    
      {
        "Status": "Pending",
        "EventName": "Students union",
        "EventGoal": 100,
        "TotalDonations": 58,
        "CreatedAt": "06/17/2021, 01:41:43",
        "UpdatedAt": "06/17/2021, 01:41:43",
        "StartDate": "02/05/2021, 00:00:00",
        "EndDate": "02/01/2021, 00:00:00",
        "EventId": 5,
        "EventSlogan": "save lives donate!",
        "FirstName": "Admin1",
        "LastName": "Atnafu"
    },
    {
      "Status": "Pending",
      "EventName": "Students union",
      "EventGoal": 100,
      "TotalDonations": 67,
      "CreatedAt": "06/17/2021, 01:41:43",
      "UpdatedAt": "06/17/2021, 01:41:43",
      "StartDate": "02/05/2021, 00:00:00",
      "EndDate": "02/01/2021, 00:00:00",
      "EventId": 5,
      "EventSlogan": "save lives donate!",
      "FirstName": "Admin1",
      "LastName": "Atnafu"
  },
  {
    "Status": "Pending",
    "EventName": "Students union",
    "EventGoal": 100,
    "TotalDonations": 67,
    "CreatedAt": "06/17/2021, 01:41:43",
    "UpdatedAt": "06/17/2021, 01:41:43",
    "StartDate": "02/05/2021, 00:00:00",
    "EndDate": "02/01/2021, 00:00:00",
    "EventId": 5,
    "EventSlogan": "save lives donate!",
    "FirstName": "Admin1",
    "LastName": "Atnafu"
},
{
  "Status": "Pending",
  "EventName": "Students union",
  "EventGoal": 100,
  "TotalDonations": 67,
  "CreatedAt": "06/17/2021, 01:41:43",
  "UpdatedAt": "06/17/2021, 01:41:43",
  "StartDate": "02/05/2021, 00:00:00",
  "EndDate": "02/01/2021, 00:00:00",
  "EventId": 5,
  "EventSlogan": "save lives donate!",
  "FirstName": "Admin1",
  "LastName": "Atnafu"
}
  ]);

  const handleSubmit = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
    {event.map((m) => {
      return <EventCard event={m}/>
    })}
    </>
  );
};

export default EventsPage;
