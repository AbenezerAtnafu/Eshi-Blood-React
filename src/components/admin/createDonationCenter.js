import React from "react";
import {
  Form,
  Input,
  Button,
  Divider,
  DatePicker,
  Select,
  Drawer,
  Col,
  Row,
} from "antd";
import moment from "moment";
import axios from "axios";

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

const CreateDonationCenter = (props) => {
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
    const donationCenter = {
      DonationCenterName: values.DonationCenterName,
      CreatedAt: Date.now.toString(),
      UpdatedAt: Date.now.toString(),
      State: values.State,
      City: values.City,
      Zone: values.Zone,
      Woreda: values.Woreda
    };

    const headers = {
      token: getCookie("token"),
    };
    console.log(headers.token);
    axios
      .post("http://127.0.0.1:5000/donationcenters/", donationCenter, {
        headers: headers,
      })
      .then(
        (result) => {
          console.log(result);
          //res.json();
          if (result.data)
            
          props.onClose();
          document.location.reload();
        },
        (error) => {
          
        }
      )
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Form
      onFinish={handleSubmit}
      layout="vertical"
      hideRequiredMark
      form={form}
      name="dynamic_rule"
    >
      <Divider plain>Donation Center Information</Divider>

      <Form.Item
        {...layout}
        name="DonationCenterName"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input Donation Center Name",
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

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            {...layout}
            name="State"
            label="State"
            rules={[{ required: true }]}
          >
            <Select
              defaultValue="Addis Ababa"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="AA">Addis Ababa</Option>
              <Option value="AM">Amhara</Option>
              <Option value="OR">Oromia</Option>
              <Option value="TG">Tigray</Option>
              <Option value="SN">SNNPR</Option>
              <Option value="SM">Somalia</Option>
              <Option value="AF">Afar</Option>
              <Option value="BS">Benshangul gumuz</Option>
              <Option value="GM">Gambella</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
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
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>

      <Row glutter={24}>
        <Col span={12}>
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
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateDonationCenter;
