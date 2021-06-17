import { Component } from "react";
import {
  Tabs,
  Card,
  Form,
  Input,
  DatePicker,
  Button,
  Typography,
  List,
  Avatar,
} from "antd";
import "./style.css";

const axios = require("axios");

const { Text } = Typography;

const { TabPane } = Tabs;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

class CreateAppointment extends Component {
  state = {
    appointments: [],
  };
  onFinish = (values) => {
    console.log(values);
  };
  getCookie = (cookieName) => {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie[cookieName];
  };
  componentDidMount() {
    axios
      .get("http://127.0.0.1:5000/appointments/", {
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
              appointments: result.data,
            });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <>
        <div className="space-align-container">
          {this.state.appointments.length === 0 ? (
            <Card
              className="space-align-block box-shadow"
              style={{ width: "100vh" }}
              title="Appointment and About Donation"
            >
              <div>
                <Tabs
                  defaultActiveKey="1"
                  size="default"
                  style={{ marginBottom: 32 }}
                >
                  <TabPane tab="Appointment" key="1">
                    <Form
                      {...layout}
                      name="nest-messages"
                      onFinish={this.onFinish}
                      validateMessages={validateMessages}
                    >
                      <Form.Item label="Date">
                        <DatePicker size="default" />
                      </Form.Item>
                      <Form.Item
                        name={["user", "introduction"]}
                        label="Description"
                      >
                        <Input.TextArea placeholder="Enter your donation description" />
                      </Form.Item>
                      <Form.Item
                        wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                      >
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </TabPane>
                  <TabPane
                    className="about-donation"
                    tab="About Donation"
                    key="2"
                  >
                    <Text italic>
                      Giving blood is not just about make a donation, it's about
                      making difference.
                    </Text>
                    <br />
                    <br />
                    <Text>
                      Blood is the most precious gift that anyone can give to
                      another person — the gift of life. A decision to donate
                      your blood can save a life, or even several if your blood
                      is separated into its components — red cells, platelets
                      and plasma — which can be used individually for patients
                      with specific conditions.
                    </Text>
                  </TabPane>
                </Tabs>
              </div>
            </Card>
          ) : (
            <Card
              className="space-align-block box-shadow"
              style={{ width: "100vh" }}
              title="Appointment and About Donation"
            >
              {/* <ul>
                {this.state.appointments.map((m) => {
                  return <li>{m.Status}</li>;
                })}
              </ul> */}
              <List
                itemLayout="horizontal"
                dataSource={this.state.appointments}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={item.AppointmentId}
                      title={<p>{item.AppointmentDescription}</p>}
                      description={
                        item.Status === "Active"
                          ? "You have already donated"
                          : "You have not donated"
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          )}
        </div>
      </>
    );
  }
}

export default CreateAppointment;
