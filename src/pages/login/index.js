import { Form, Input, Button, Typography, Card } from "antd";
import { useHistory, Link } from "react-router-dom";
import "./style.css";
const axios = require("axios");

const { Title } = Typography;

var d = new Date();
d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
var expires = "expires=" + d.toUTCString();

const Login = () => {
  const history = useHistory();

  const handleSubmit = (values) => {
    console.log("Success:", values);

    axios
      .post("http://127.0.0.1:5000/login/", {
        Email: values.email,
        Password: values.password,
      })
      .then(function (response) {
        console.log(response.data.token);
        if (response.data === "user not found") {
        } else {
          document.cookie = `token=${response.data.token};${expires};path=/`;
          if (response.data.role === "Admin") history.push("/admin");
          else if (response.data.role === "Donor")
            history.push("/user-layout/profiles");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      {/* <img src={window.location.origin + '/wave.png'}/>      */}

      <div class="container">
        <div class="img">
          <img src={window.location.origin + "/bg.svg"} />
        </div>
        <div class="login-content">
          <noform className="box-shadow" style={{ width: 400, padding: 20 }}>
            <Title level={3}>Eshi Blood Login</Title>
            <Form initialValues={{}} onFinish={handleSubmit}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input size="large" placeholder="Email Address" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password size="large" placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <input type="submit" class="btn" value="Login" />
              </Form.Item>
            </Form>
            <Link to="/sign-up">Register here</Link>
          </noform>
        </div>
      </div>
    </>
  );
};

export default Login;
