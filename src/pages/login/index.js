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
      {/* <img src={window.location.origin + '/wave.png'}/>      */}

    <div class="container">
      <div class="img">
      <img src={window.location.origin + '/bg.svg'}/>     

         
      </div>
      <div class="login-content">
        <form action="index.html">
          
          <h2 class="title">Eshi Blood</h2>
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
              <input type="submit" class="btn" value="Login"/>

              </Form.Item>
            </Form>
              </form>
          </div>
      </div>
    

    </>
  );
};

export default Login;
