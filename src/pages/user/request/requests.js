import { Form, Input, Button, Typography, Card, Row, Col } from "antd";
import EventCard from "../../../components/user/event-card";
import Header from "../../../components/user/header";
import RequestCard from "../../../components/user/request-card";
import React, { useState } from "react";
const axios = require("axios");

class RequestsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      request: [],
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
      .get("http://127.0.0.1:5000/requests/", {
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
              request: result.data,
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
    const { request, error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <>
          <Row style={{ margin: 30, height: "100vh" }}>
            {request.map((m) => {
              return (
                <Col span={12}>
                  <RequestCard requests={m} />
                </Col>
              );
            })}
          </Row>
        </>
      );
    }
  }
}

export default RequestsPage;
