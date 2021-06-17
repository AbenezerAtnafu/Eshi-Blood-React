import React, { useState } from "react";
import {
  Avatar,
  Card,
  Form,
  Input,
  Cascader,
  DatePicker,
  Select,
  Row,
  Col,
  Button,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";
import UserProfile from "../../../components/user/profile";
const axios = require("axios");

const { Option } = Select;
const residences = [
  {
    value: "Addis Ababa",
    label: "Addis Ababa",
    children: [
      {
        value: "Addis Ketema",
        label: "Addis Ketema",
        children: [
          {
            value: "01",
            label: "01",
          },
        ],
      },
      {
        value: "Akaki Kaliti",
        label: "Akaki Kaliti",
        children: [
          {
            value: "02",
            label: "02",
          },
        ],
      },
      {
        value: "Arada",
        label: "Arada",
        children: [
          {
            value: "03",
            label: "03",
          },
        ],
      },
      {
        value: "Bole",
        label: "Addis Ketema",
        children: [
          {
            value: "04",
            label: "04",
          },
        ],
      },
      {
        value: "Gullele",
        label: "Gullele",
        children: [
          {
            value: "05",
            label: "05",
          },
        ],
      },
      {
        value: "Kirkos",
        label: "Kirkos",
        children: [
          {
            value: "06",
            label: "06",
          },
        ],
      },
      {
        value: "Kolfe Keranio",
        label: "Kolfe Keranio",
        children: [
          {
            value: "07",
            label: "07",
          },
        ],
      },
      {
        value: "Lideta",
        label: "Lideta",
        children: [
          {
            value: "08",
            label: "08",
          },
        ],
      },
      {
        value: "Nifas Silk-Lafto",
        label: "Nifas Silk-Lafto",
        children: [
          {
            value: "09",
            label: "09",
          },
        ],
      },
      {
        value: "Yeka",
        label: "Yeka",
        children: [
          {
            value: "10",
            label: "10",
          },
        ],
      },
    ],
  },
  {
    value: "Amhara",
    label: "Amhara",
    children: [
      {
        value: "Gonder",
        label: "Gonder",
        children: [
          {
            value: "05",
            label: "05",
          },
        ],
      },
    ],
  },
  {
    value: "Afar",
    label: "Afar",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
  {
    value: "Benishangul",
    label: "Benishangul",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
  {
    value: "Oromia",
    label: "Oromia",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
  {
    value: "South Nations",
    label: "South Nations",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
  {
    value: "Sidama State",
    label: "Sidama State",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
  {
    value: "Gambela",
    label: "Gambela",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
  {
    value: "Somali",
    label: "Somali",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
  {
    value: "Harari",
    label: "Harari",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
  {
    value: "Dire Dawa",
    label: "Dire Dawa",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function handleChange(value) {
  console.log(`selected ${value}`);
}

class ProfileDetail extends React.Component {
  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
      >
        <Option value="251">+251</Option>
      </Select>
    </Form.Item>
  );

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      user: [],
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
      .get("http://127.0.0.1:5000/user/details/", {
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
              user: result.data,
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

  render() {
    const { user, error } = this.state;
    return (
      <>
        <div>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <Card
                title="Personal Information Details"
                className="edit-form box-shadow"
              >
                <Row>
                  <Col span={24}>
                    <Avatar
                      className="avatar"
                      size={64}
                      icon={<UserOutlined />}
                    />
                  </Col>
                </Row>
                <div className="details">
                  <Row>
                    <Col md={12}>Full name</Col>
                    <Col md={12}>{user.FirstName + " " + user.LastName}</Col>
                  </Row>
                  <Row>
                    <Col sm={12}>Username</Col>
                    <Col sm={12}>{user.UserName}</Col>
                  </Row>
                  <Row>
                    <Col sm={12}>Gender</Col>
                    <Col sm={12}>{user.Gender}</Col>
                  </Row>
                  <Row>
                    <Col sm={12}>Birth date</Col>
                    <Col sm={12}>{user.BirthDate}</Col>
                  </Row>
                  <Row>
                    <Col sm={12}>Martial Status</Col>
                    <Col sm={12}>{user.MartialStatus}</Col>
                  </Row>
                  <Row>
                    <Col sm={12}>Blood Type</Col>
                    <Col sm={12}>{user.BloodType}</Col>
                  </Row>
                  <Row>
                    <Col sm={12}>Appointments</Col>
                    <Col sm={12}>{user.Appointments}</Col>
                  </Row>
                  <Row>
                    <Col sm={12}>Address</Col>
                    <Col sm={12}>
                      {user.State + " / " + user.Zone + " / " + user.Woreda}
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>Email</Col>
                    <Col sm={12}>{user.Email}</Col>
                  </Row>
                  <Row>
                    <Col sm={12}>Phone Number</Col>
                    <Col sm={12}>{user.PhoneNumber}</Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col sm={2}></Col>
            <Col sm={8}>
              <UserProfile user={user} />
            </Col>
            <Col sm={4}></Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ProfileDetail;
