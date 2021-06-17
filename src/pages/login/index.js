import { Form, Input, Button, Typography, Card } from "antd";
import { Link } from "react-router-dom";

import "./style.css";

const {Title} = Typography;

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
        <form action="index.html" className="box-shadow" style={{width:400,padding:20}}>
          
          <Title level={3}>Eshi Blood Login</Title>
          
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
            <Link to="/sign-up">Register here</Link>
              </form>
          </div>
      </div>
    

    </>
  );
};

export default Login;
