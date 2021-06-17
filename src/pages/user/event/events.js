import { Form, Input, Button, Typography, Card } from "antd";
import EventCard from "../../../components/user/event-card";
import Header from "../../../components/user/header";

const EventsPage = () => {
  const handleSubmit = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <div>
        <EventCard></EventCard>
        <EventCard></EventCard>
        {/* 
        <EventCard></EventCard>
        <EventCard></EventCard> */}
      </div>
    </>
  );
};

export default EventsPage;
