import React from 'react'
import { Card, Col, Row } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

class DonationCenter extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   onCollapse = collapsed => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };

  render() {
    // const { collapsed } = this.state;
    return (
        <Row gutter={16}>
        <Col span={2}>
          
        </Col>
        <Col span={20}>
          <Card bordered={false}>
          <Title level={4}><Title level={2}>h2. Ant Design</Title>h4. Ant Design</Title>
          </Card>
        </Col>
        <Col span={2}>
         
        </Col>
      </Row>
    );
  }
}
export default DonationCenter