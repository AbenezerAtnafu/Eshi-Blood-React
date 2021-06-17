import { Component } from "react";
import {
  Skeleton,
  Switch,
  Card,
  Typography,
  Avatar,
  Row,
  Col,
  Button,
  Divider,
  Progress,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PhoneTwoTone,
  CalendarTwoTone,
  BulbTwoTone,
} from "@ant-design/icons";

import "./style.css";
import axios from "axios";
const { Text, Link } = Typography;

const { Title } = Typography;

const { Meta } = Card;

const style = { padding: "8px 0" };

class EventCard extends Component {
  state = {
    loading: true,
    isAppointed: false,
  };

  onChange = (checked) => {
    this.setState({ loading: !checked });
  };

  getCookie = (cookieName) => {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie[cookieName];
  };

  headers = {
    token: this.getCookie("token"),
  };

  handleAppoint = (eventId) => {
    const appointObj = {
      AppointmentDescription: `Appointment from Event ${eventId}`,
    };
    console.log(appointObj);
    axios
      .post(
        `http://127.0.0.1:5000/events/${eventId}/appointments/`,
        appointObj,
        {
          headers: this.headers,
        }
      )
      .then(
        (result) => {
          console.log(result);
          this.setState({ isAppointed: true });
        },
        (error) => {}
      )
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { loading, isAppointed } = this.state;
    if (!isAppointed) {
      return (
        <>
          <Row>
            <Col span={3}></Col>
            <Col span={16}>
              <div style={{ padding: 20 }}>
                <Card
                  className="event-box-shadow"
                  type="inner"
                  title="Event"
                  extra={
                    <Button
                      onClick={() =>
                        this.handleAppoint(this.props.event.EventId)
                      }
                      type="primary"
                    >
                      Appoint
                    </Button>
                  }
                >
                  <Row>
                    <Col span={24}>
                      <Title level={4}>{this.props.event.EventName}</Title>
                    </Col>
                  </Row>

                  <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={4}>
                      <div style={style}>
                        <PhoneTwoTone />
                        &nbsp;
                        <Text type="secondary">
                          {this.props.event.FirstName}
                        </Text>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                      <div style={style}>
                        <CalendarTwoTone />
                        &nbsp;
                        <Text type="secondary">
                          {this.props.event.StartDate}
                        </Text>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                      <div style={style}>
                        <CalendarTwoTone />
                        &nbsp;
                        <Text type="secondary">{this.props.event.EndDate}</Text>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                      <div style={style}>
                        <BulbTwoTone />
                        <Text type="secondary">
                          {this.props.event.EventGoal}
                        </Text>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ paddingTop: 5 }} span={16}>
                      <Text italic>{this.props.event.EventSlogan}</Text>
                    </Col>
                    <Col span={4}>
                      <Title level={5}>Goal/Total Donation</Title>
                    </Col>
                    <Col span={4}>
                      <Progress
                        percent={(
                          (this.props.event.TotalDonations /
                            this.props.event.EventGoal) *
                          100
                        ).toFixed(2)}
                      />
                    </Col>
                  </Row>
                  <Divider orientation="left"></Divider>
                  <Row>
                    <Col className="gutter-row" span={3}>
                      <div style={style}>
                        <Title level={5}>
                          <Text type="secondary">Total Donation</Text>
                        </Title>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                      <div style={style}>
                        <Title level={4}>
                          <Text keyboard>
                            {this.props.event.TotalDonations}
                          </Text>
                        </Title>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
          </Row>
        </>
      );
    } else {
      return (
        <>
          <Row>
            <Col span={3}></Col>
            <Col span={16}>
              <div style={{ padding: 20 }}>
                <Card
                  className="event-box-shadow"
                  type="inner"
                  title="Event"
                  extra={
                    <Title level={3}>Already Appointed to this Event.</Title>
                  }
                >
                  <Row>
                    <Col span={24}>
                      <Title level={4}>{this.props.event.EventName}</Title>
                    </Col>
                  </Row>

                  <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={4}>
                      <div style={style}>
                        <PhoneTwoTone />
                        &nbsp;
                        <Text type="secondary">
                          {this.props.event.FirstName}
                        </Text>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                      <div style={style}>
                        <CalendarTwoTone />
                        &nbsp;
                        <Text type="secondary">
                          {this.props.event.StartDate}
                        </Text>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                      <div style={style}>
                        <CalendarTwoTone />
                        &nbsp;
                        <Text type="secondary">{this.props.event.EndDate}</Text>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                      <div style={style}>
                        <BulbTwoTone />
                        <Text type="secondary">
                          {this.props.event.EventGoal}
                        </Text>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ paddingTop: 5 }} span={16}>
                      <Text italic>{this.props.event.EventSlogan}</Text>
                    </Col>
                    <Col span={4}>
                      <Title level={5}>Goal/Total Donation</Title>
                    </Col>
                    <Col span={4}>
                      <Progress
                        percent={(
                          (this.props.event.TotalDonations /
                            this.props.event.EventGoal) *
                          100
                        ).toFixed(2)}
                      />
                    </Col>
                  </Row>
                  <Divider orientation="left"></Divider>
                  <Row>
                    <Col className="gutter-row" span={3}>
                      <div style={style}>
                        <Title level={5}>
                          <Text type="secondary">Total Donation</Text>
                        </Title>
                      </div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                      <div style={style}>
                        <Title level={4}>
                          <Text keyboard>
                            {this.props.event.TotalDonations}
                          </Text>
                        </Title>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
          </Row>
        </>
      );
    }
  }
}

export default EventCard;
