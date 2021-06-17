import { Form, Input, Button, Typography, Card } from "antd";
import Header from "../../components/user/header";

import "./style.css";

const AppointmentDetails = () => {

  return (
    <>
        <Descriptions title="User Info" layout="vertical">
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Address" span={2}>
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        </Descriptions>
    </>
  );
};

export default AppointmentDetails;
