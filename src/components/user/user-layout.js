import React from "react";
import { Layout, Menu, Divider, Typography, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { Route, Switch, Link, Redirect } from "react-router-dom";
import EventsPage from "../../pages/user/event/events";

import "./style.css";
import RequestsPage from "../../pages/user/request/requests";
import CreateAppointment from "../../pages/user/appointment/create-appointment";
import ProfileDetail from "../../pages/user/profile/profile-detail";

const { Title, Text } = Typography;

const { Header, Content, Sider } = Layout;

class UserLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      redirect: null,
      isSignedIn: true,
    };
    this.signedIn();
  }
  getCookie = (cookieName) => {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie[cookieName];
  };

  logout = () => {
    document.cookie = "token='' ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    this.setState({
      redirect: "/login",
      isSignedIn: false,
    });
  };
  signedIn = () => {
    const token = this.getCookie("token");
    console.log(token);
    if (!token) {
      this.setState({
        isSignedIn: false,
        redirect: "/login",
      });
    } else {
      this.setState({
        isSignedIn: true,
        redirect: null,
      });
    }
    console.log(token, this.state);
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    if (!this.state.isSignedIn) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0, paddingTop: 30 }}
          >
            <Text style={{ paddingLeft: 20 }} strong>
              Eshi Blood
            </Text>

            <Divider />
            <Menu.Item key="sub1" icon={<UserOutlined />} title="Appointments">
              <Link to="/user-layout/appointment">Appointment</Link>
            </Menu.Item>
            <Menu.Item key="sub2" icon={<UserOutlined />} title="Requests">
              <Link to="/user-layout/requests">Request</Link>
            </Menu.Item>
            <Menu.Item key="sub3" icon={<UserOutlined />} title="Events">
              <Link to="/user-layout/events">Event</Link>
            </Menu.Item>
            <Menu.Item key="sub4" icon={<UserOutlined />} title="Profles">
              <Link to="/user-layout/profiles">My Profile</Link>
            </Menu.Item>
            <Menu.Item key="sub5" icon={<UserOutlined />} title="Log out">
              <Button onClick={this.logout}>Log Out</Button>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            // className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: "100vh",
              minHeight: 200,
              height: "100vh",
            }}
          >
            <Switch>
              <Route
                exact
                path="/user-layout/appointment"
                component={CreateAppointment}
              ></Route>
              <Route
                exact
                path="/user-layout/requests"
                component={RequestsPage}
              ></Route>
              <Route
                exact
                path="/user-layout/events"
                component={EventsPage}
              ></Route>
              <Route
                exact
                path="/user-layout/profiles"
                component={ProfileDetail}
              ></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default UserLayout;
