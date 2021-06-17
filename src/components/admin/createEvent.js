import React from "react";
import { Form, Input, Button, Divider, DatePicker } from "antd";
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

const CreateEvent = (props) => {
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

    const eventObj = {
      EventGoal: values.EventGoal,

      EventName: values.EventName,
      EndDate: values.StartDate[1],
      StartDate: values.StartDate[0],
      EventSlogan: values.EventSlogan,
    };

    const headers = {
      token: getCookie("token"),
    };
    console.log(headers.token);
    axios
      .post("http://127.0.0.1:5000/events/", eventObj, {
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
    <Form form={form} name="dynamic_rule" onFinish={handleSubmit}>
      <Divider plain>Event Information</Divider>
      <Form.Item
        {...layout}
        name="EventName"
        label="Event Name"
        rules={[
          {
            required: true,
            message: "Please input event name",
          },
        ]}
      >
        <Input placeholder="Event name" />
      </Form.Item>
      <Form.Item
        {...layout}
        name="EventSlogan"
        label="Slogan"
        rules={[
          {
            required: true,
            message: "Please input your slogan",
          },
        ]}
      >
        <Input placeholder="Slogan" />
      </Form.Item>
      <Form.Item
        {...layout}
        name="EventGoal"
        label="Event Goal"
        rules={[
          {
            required: true,
            message: "Please input your goal",
          },
        ]}
      >
        <Input placeholder="Goal" />
      </Form.Item>

      <Form.Item
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
      </Form.Item>

      <Divider plain>Organizer Information</Divider>
      <Form.Item
        {...layout}
        name="OrganizerName"
        label="Organizer Name"
        rules={[
          {
            required: true,
            message: "Please input your organizer name",
          },
        ]}
      >
        <Input placeholder="Organizer Name" />
      </Form.Item>
      <Form.Item
        {...layout}
        name="OrganizerPhone"
        label="Organizer Phone"
        rules={[
          {
            required: true,
            message: "Please input Organizer's Phone number",
          },
        ]}
      >
        <Input placeholder="Organizer's Phone number" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateEvent;
