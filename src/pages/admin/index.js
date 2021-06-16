import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Route, Switch, Link } from "react-router-dom";

import EventsList from "../../components/admin/events";
import RequestList from "../../components/admin/requests";
import DonationCenter from "../../components/admin/donationCenter";

import CreateDonationCenter from "../../components/admin/createDonationCenter";
import CreateEvent from "../../components/admin/createEvent";
import CreateRequest from "../../components/admin/createRequest";

//import DonationCenter from './donationCenter';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AdminDashboard extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
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
              Dashboard
            </Menu.Item>
            <Menu.Item key="sub1" icon={<UserOutlined />} title="Appointments">
              <Link to="/admin/donationCenters">Donation Centers</Link>
            </Menu.Item>
            <Menu.Item key="sub2" icon={<UserOutlined />} title="Events">
              <Link to="/admin/events">Events</Link>
            </Menu.Item>
            <Menu.Item key="sub3" icon={<UserOutlined />} title="Requests">
              <Link to="/admin/requests">Requests</Link>
            </Menu.Item>
            <Menu.Item key="sub4" icon={<UserOutlined />} title="Appointments">
              <Link to="/admin/requests">Donors</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Switch>
            <Route exact path="/admin/events" component={EventsList}></Route>
            <Route exact path="/admin/requests" component={RequestList}></Route>
            <Route
              exact
              path="/admin/donationCenters"
              component={DonationCenter}
            ></Route>
            <Route
              exact
              path="/admin/events/create"
              component={CreateEvent}
            ></Route>
            <Route
              exact
              path="/admin/requests/create"
              component={CreateRequest}
            ></Route>
            <Route
              exact
              path="/admin/donationCenters/create"
              component={CreateDonationCenter}
            ></Route>
          </Switch>
          {/* <DonationCenter></DonationCenter> */}
        </Layout>
      </Layout>
    );
  }
}
export default AdminDashboard;
