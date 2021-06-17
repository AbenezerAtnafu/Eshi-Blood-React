import React from "react";
import { Layout, Menu, Button } from "antd";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";

import { Route, Switch, Link, withRouter, Redirect } from "react-router-dom";

import Events from "../../components/admin/events";
import Appointments from "../../components/admin/appointments";
import Requests from "../../components/admin/requests";
import DonationCenter from "../../components/admin/donationCenter";
import Dashboard from "../../components/admin/dashboard";

const { Sider } = Layout;

class AdminDashboard extends React.Component {
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

  logout = () => {
    document.cookie = "token='' ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    this.setState({
      redirect: "/login",
      isSignedIn: false,
    });
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    if (!this.state.isSignedIn) {
      return <Redirect to={this.state.redirect} />;
    }
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu
            style={{ minHeight: "100vh", paddingTop: "3.6rem" }}
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/admin"> Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="sub1" icon={<UserOutlined />} title="Appointments">
              <Link to="/admin/donationCenters">Donation Centers</Link>
            </Menu.Item>
            <Menu.Item key="sub2" icon={<UserOutlined />} title="Appointments">
              <Link to="/admin/appointments">Appointments</Link>
            </Menu.Item>

            <Menu.Item key="sub3" icon={<UserOutlined />} title="Events">
              <Link to="/admin/events">Events</Link>
            </Menu.Item>
            <Menu.Item key="sub4" icon={<UserOutlined />} title="Requests">
              <Link to="/admin/requests">Requests</Link>
            </Menu.Item>
            <Menu.Item key="sub5" icon={<UserOutlined />} title="Log Out">
              <Button onClick={this.logout}>Log Out</Button>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Switch>
            <Route exact path="/admin" component={Dashboard}></Route>
            <Route exact path="/admin/events" component={Events}></Route>
            <Route exact path="/admin/requests" component={Requests}></Route>
            <Route
              exact
              path="/admin/appointments"
              component={Appointments}
            ></Route>
            <Route
              exact
              path="/admin/donationCenters"
              component={DonationCenter}
            ></Route>
          </Switch>
        </Layout>
      </Layout>
    );
  }
}
export default AdminDashboard;
