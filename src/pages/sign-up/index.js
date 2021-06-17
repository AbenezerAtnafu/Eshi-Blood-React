import React, { useState } from "react";
import {
  Layout,
  Form,
  Row,
  Col,
  Input,
  Cascader,
  DatePicker,
  Select,
  Button,
  Typography,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import "./style.css";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const { Option } = Select;
const residences = [
  {
    value: "AA",
    label: "Addis Ababa1",
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
    value: "AM",
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
    value: "AF",
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
    value: "BS",
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
    value: "OR",
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
    value: "SN",
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
    value: "SS",
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
    value: "HR",
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
    value: "DD",
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

const SignUpPage = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);

    const user = {
      FirstName: values.FirstName,
      LastName: values.LastName,
      UserName: values.UserName,
      Gender: values.Gender,
      BirthDate: values.BirthDate,
      MartialStatus: values.MartialStatus,
      BloodType: values.BloodType,
      State: values.residence[0],
      Zone: values.residence[1],
      Woreda: values.residence[2],
      PhoneNumber: values.PhoneNumber,
      Email: values.Email,
      Password: values.Password,
    };

    axios
      .post("http://127.0.0.1:5000/register/", user)
      .then(
        (result) => {
          console.log(result);
          //res.json();
          //
          history.push("/login/");
          document.location.reload();
        },
        (error) => {}
      )
      .catch(function (error) {
        console.log(error);
      });
  };

  const prefixSelector = (
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

  return (
    <>
      <div class="container">
        <div class="img">
          <img src={window.location.origin + "/bg2.svg"} />
        </div>
        <div className="login-content">
          <Form
            className="box-shadow"
            style={{ width: 600, paddingRight: 80, paddingTop: 20 }}
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ["Addis Ababa", "6Kilo", "ShiroMeda"],
              prefix: "251",
            }}
            scrollToFirstError
          >
            <Title level={3}>Eshi Blood Register</Title>
            <Form.Item
              name="FirstName"
              label="First name"
              rules={[
                {
                  required: true,
                  message: "Please enter your first name!",
                },
              ]}
            >
              <Input placeholder="First name" />
            </Form.Item>

            <Form.Item
              name="LastName"
              label="Last name"
              rules={[
                {
                  required: true,
                  message: "Please enter your last name!",
                },
              ]}
            >
              <Input placeholder="Last name" />
            </Form.Item>

            <Form.Item label="Gender" name="Gender">
              <Select defaultValue="Male" onChange={handleChange}>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            </Form.Item>

            <Form.Item name="BirthDate" label="Birth date">
              <DatePicker className="date-picker" />
            </Form.Item>

            <Form.Item
              name="UserName"
              label="User name"
              rules={[
                {
                  type: "string",
                  required: true,
                  message: "Please input a username!",
                },
              ]}
            >
              <Input placeholder="User name" />
            </Form.Item>

            <Form.Item
              name="Email"
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid Email!",
                },
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="Password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item name="MartialStatus" label="Martial Status">
              <Select defaultValue="Single" onChange={handleChange}>
                <Option value="Single">Single</Option>
                <Option value="Married">Married</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="residence"
              label="Address"
              rules={[
                {
                  type: "array",
                  required: true,
                  message: "Please enter your address!",
                },
              ]}
            >
              <Cascader
                options={residences}
                placeholder="City / Subcity / Woreda"
              />
            </Form.Item>

            <Form.Item
              name="BloodType"
              label="Blood Type"
              rules={[
                {
                  required: true,
                  message: "Please enter your blood type!",
                },
              ]}
            >
              <Select name="BloodType" placeholder="Blood Type">
                <Option value="A+">A+</Option>
                <Option value="A-">A-</Option>
                <Option value="B+">B+</Option>
                <Option value="B-">B-</Option>
                <Option value="AB+">AB+</Option>
                <Option value="AB-">AB-</Option>
                <Option value="O+">O+</Option>
                <Option value="O-">O-</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="PhoneNumber"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <input type="submit" class="btn" value="Register" />
              <Link to="/login" className="already-have-account">
                Already have account?
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
