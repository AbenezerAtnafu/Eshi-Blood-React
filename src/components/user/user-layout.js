import React from "react";
import { Layout, Menu, Breadcrumb, Card, Divider, Typography} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";


import { Route, Switch, Link } from "react-router-dom";
import EventsPage from "../../pages/user/event/events";

import "./style.css";
import RequestsPage from "../../pages/user/request/requests";
const { Title, Text } = Typography;

//import DonationCenter from './donationCenter';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class UserLayout extends React.Component {
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
 
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0, paddingTop: 30}}
        >
                <Text style={{paddingLeft: 20}} strong>Eshi Blood</Text>

            <Divider />
            <Menu.Item key="sub1" icon={<UserOutlined />} title="Appointments">
              <Link to="/user-layout/appoitnment">Appointment</Link>
            </Menu.Item>
            <Menu.Item key="sub2" icon={<UserOutlined />} title="Requests">
              <Link to="/user-layout/requests">Request</Link>
            </Menu.Item>
            <Menu.Item key="sub3" icon={<UserOutlined />} title="Events">
              <Link to="/user-layout/events">Event</Link>
            </Menu.Item>
            <Menu.Item key="sub4" icon={<UserOutlined />} title="Profles">
              <Link to="/user-layout/profile">My Profile</Link>
            </Menu.Item>
          
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
       
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
            {/* <Route exact path="/user-layout/appoitnment" component={AppointmentPage}></Route> */}
            <Route exact path="/user-layout/requests" component={RequestsPage}></Route>
            <Route exact path="/user-layout/events" component={EventsPage}></Route>
            {/* <Route exact path="/user-layout/profiles" component={ProfilePage}></Route> */}
          </Switch>
        </Content>
      </Layout>
    </Layout>
    //   <Layout style={{ minHeight: "100vh" }}>
    //     <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
    //       <div className="logo" />
          
           
            
           
            
    //       </Menu>
    //     </Sider>
    //     <Layout className="site-layout">
          
    //       {/* <DonationCenter></DonationCenter> */}
    //     </Layout>
    //   </Layout>
    );
  }
}
export default UserLayout;
