import { Form, Input, Button, Typography, Card } from "antd";
import Header from "../../components/user/header";
import Events from "../user/event/events";

import "./style.css";

const Login = () => {
  const handleSubmit = (values) => {
    console.log("Success:", values);
  };
  return (
    <>

    <div className="login-container">
      
      <Card className="login-card">
        <Typography.Title style={{ textAlign: "center" }}>
          Login
        </Typography.Title>
        <Form initialValues={{}} onFinish={handleSubmit}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input size="large" placeholder="Email Address" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
    </>
  );
};

export default Login;
