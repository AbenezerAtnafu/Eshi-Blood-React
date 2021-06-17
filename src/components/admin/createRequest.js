import React, { useState, useEffect } from "react";
import { Form, Input, Button, Divider, DatePicker, Radio } from "antd";
import moment from "moment";
import axios from "axios";

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const CreateRequest = (props) => {
  const [form] = Form.useForm();
  const getCookie = (cookieName) => {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie[cookieName];
  };

  const handleSubmit = (values) => {
    console.log("values : ", values);
    const address = {
      State: values.State,
      City: values.City,
      Zone: values.Zone,
    };
    const request = {
      RequestReason: values.RequestReason,
      UnitsNeeded: values.UnitsNeeded,
      BloodType: values.BloodType,
    };

    const headers = {
      token: getCookie("token"),
    };
    console.log(headers.token);
    axios
      .post("http://127.0.0.1:5000/requests/", request, {
        headers: headers,
      })
      .then(
        (result) => {
          console.log(result);
          //res.json();
          if (result.data) props.onClose();
          document.location.reload();
        },
        (error) => {}
      )
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Form onFinish={handleSubmit} form={form} name="dynamic_rule">
      <Divider plain>Request Information</Divider>
      <Form.Item
        {...layout}
        name="UnitsNeeded"
        label="Units Needed"
        rules={[
          {
            required: true,
            message: "Please input Units Needed",
          },
        ]}
      >
        <Input placeholder="Units Needed" />
      </Form.Item>
      <Form.Item
        {...layout}
        name="RequestReason"
        label="Reason"
        rules={[
          {
            required: true,
            message: "Please input your Reason",
          },
        ]}
      >
        <Input placeholder="Reason" />
      </Form.Item>

      {/* <Form.Item
        {...layout}
        name="StartDate"
        label="From - To"
        rules={[
          {
            required: true,
            message: "Please input your date",
          },
        ]}
      >
        <RangePicker
          defaultValue={[
            moment("2021/06/17", dateFormat),
            moment("2021/06/18", dateFormat),
          ]}
          format={dateFormat}
        />
      </Form.Item> */}

      <Divider plain>Blood Type</Divider>
      <Form.Item
        {...layout}
        name="BloodType"
        label="Blood Type"
        rules={[
          {
            required: true,
            message: "Please input your date",
          },
        ]}
      >
        <Radio.Group defaultValue="A+" buttonStyle="solid">
          <Radio.Button value="A+">A+</Radio.Button>
          <Radio.Button value="B+">B+</Radio.Button>
          <Radio.Button value="AB+">AB+</Radio.Button>
          <Radio.Button value="O+">O+</Radio.Button>

          <Radio.Button value="A-">A-</Radio.Button>
          <Radio.Button value="B-">B-</Radio.Button>
          <Radio.Button value="AB-">AB-</Radio.Button>
          <Radio.Button value="O-">O-</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateRequest;
