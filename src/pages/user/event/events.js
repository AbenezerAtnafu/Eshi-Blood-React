import React from "react";
import { Form, Input, Button, Typography, Card } from "antd";
import EventCard from "../../../components/user/event-card";
import Header from "../../../components/user/header";
const axios = require("axios");

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      eventList: [],
      searchText: "",
      searchedColumn: "",
      visible: false,
    };
  }
  getCookie = (cookieName) => {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie[cookieName];
  };

  componentDidMount = () => {
    axios
      .get("http://127.0.0.1:5000/events/", {
        headers: {
          token: this.getCookie("token"),
        },
      })
      .then(
        (result) => {
          console.log(result);
          //res.json();
          if (result.data)
            this.setState({
              isLoaded: true,
              eventList: result.data,
            });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  handleSubmit = (values) => {
    console.log("Success:", values);
  };
  render() {
    const { eventList, error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <>
          {eventList.map((m) => {
            return <EventCard event={m} />;
          })}
        </>
      );
    }
  }
}

export default EventsPage;
