import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Switch, Route, Link } from "react-router-dom";
import DonationCenter from '../../components/admin/donationCenter';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AdminDashboard extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu style={{ minHeight: '100vh', paddingTop:'3.6rem' }} theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/admin/donationCenter">
              Donation Center
            </Link>
            </Menu.Item>
            <SubMenu key="sub2" icon={<UserOutlined />} title="Events">
            <Link to="/admin/events">
              Events
            </Link>
            </SubMenu>
            <SubMenu key="sub3" icon={<UserOutlined />} title="Requests">
            <Link to="/admin/events">
              request
            </Link>
              {/* <Menu.Item key="3">Requests</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item> */}
            </SubMenu>
            <SubMenu key="sub4" icon={<UserOutlined />} title="Appointments">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<TeamOutlined />} title="Users">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" icon={<TeamOutlined />} title="Roles/Claims">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
           
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <DonationCenter></DonationCenter>
        </Layout>
      </Layout>
    );
  }
}
export default AdminDashboard