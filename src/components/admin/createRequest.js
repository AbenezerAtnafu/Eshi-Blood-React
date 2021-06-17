import React, { useState, useEffect } from "react";
import { Form, Input, Button, Divider, DatePicker, Radio } from "antd";
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
const CreateRequest = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} name="dynamic_rule">
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
        name="Reason"
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

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateRequest;
