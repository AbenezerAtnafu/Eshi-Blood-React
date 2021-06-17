import React, { useState, useEffect } from "react";
import { Form, Input, Button, Divider, DatePicker } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};
const CreateEvent = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} name="dynamic_rule">
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
        name="Slogan"
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
        name="Goal"
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
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateEvent;
