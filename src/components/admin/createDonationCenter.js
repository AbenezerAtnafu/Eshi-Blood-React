import React, { useState, useEffect } from "react";
import { Form, Input, Button, Divider, DatePicker, Select } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;
const { Option } = Select;

const dateFormat = "YYYY/MM/DD";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};
function onGenderChange() {}
const CreateDonationCenter = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} name="dynamic_rule">
      <Divider plain>Donation Center Information</Divider>
      <Form.Item
        {...layout}
        name="Name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input Name",
          },
        ]}
      >
        <Input placeholder="Donation Center Name" />
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

      <Form.Item
        {...layout}
        name="State"
        label="State"
        rules={[{ required: true }]}
      >
        <Select defaultValue="Addis Ababa" onChange={onGenderChange} allowClear>
          <Option value="Addis Ababa">Addis Ababa</Option>
          <Option value="Amhara">Amhara</Option>
          <Option value="Oromia">Oromia</Option>
          <Option value="Tigray">Tigray</Option>
          <Option value="SNNPR">SNNPR</Option>
          <Option value="Somalia">Somalia</Option>
          <Option value="Afar">Afar</Option>
          <Option value="Benshangul gumuz">Benshangul gumuz</Option>
          <Option value="Gambella">Gambella</Option>
        </Select>
      </Form.Item>
      <Form.Item
        {...layout}
        name="City"
        label="City"
        rules={[
          {
            required: true,
            message: "Please input City",
          },
        ]}
      >
        <Input placeholder="Donation Center City" />
      </Form.Item>
      <Form.Item
        {...layout}
        name="Zone"
        label="Zone"
        rules={[
          {
            required: true,
            message: "Please input Zone",
          },
        ]}
      >
        <Input placeholder="Donation Center Zone" />
      </Form.Item>
      <Form.Item
        {...layout}
        name="Woreda"
        label="Woreda"
        rules={[
          {
            required: true,
            message: "Please input Woreda",
          },
        ]}
      >
        <Input placeholder="Donation Center Woreda" />
      </Form.Item>
      <Form.Item
        {...layout}
        name="Kebele"
        label="Kebele"
        rules={[
          {
            required: true,
            message: "Please input Kebele",
          },
        ]}
      >
        <Input placeholder="Donation Center Kebele" />
      </Form.Item>
      <Form.Item
        {...layout}
        name="Postal Code"
        label="Postal Code"
        rules={[
          {
            required: true,
            message: "Please input Postal Code",
          },
        ]}
      >
        <Input placeholder="Donation Center Postal Code" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateDonationCenter;
