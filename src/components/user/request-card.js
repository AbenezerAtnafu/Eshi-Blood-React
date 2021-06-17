import { Component } from 'react';
import { Skeleton, Switch, Card,Typography,Button , Avatar,Col, Row, Divider, Progress} from 'antd';
import { EditOutlined, EllipsisOutlined, RiseOutlined, FallOutlined,DownloadOutlined,BgColorsOutlined,SettingOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;

const { Meta } = Card;

class RequestCard extends Component {
  state = {
    loading: true,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
          <Card className="box-shadow" title="Request" extra={<Button type="primary">Appoint</Button>} style={{ width: 700, marginBottom: 20 }}>
            <Row>
            
              <Col span={24}><Title level={4}>Blood Types: A A+ A- B B+</Title></Col>
            </Row>
            <Divider orientation="left"></Divider>

            <Row style={{marginBottom: 15, marginTop: 15}}>
              <Col span={8}>
                <Row>
                  <Col span={24}><RiseOutlined/>&nbsp;<Text strong>Start Date</Text></Col>
                </Row>
                <Row>
                  <Col span={24}><Text type="success">00/00/0001</Text></Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <Col span={24}><FallOutlined />&nbsp;<Text strong>End Date</Text></Col>
                </Row>
                <Row>
                  <Col span={24}><Text type="danger">00/00/0001</Text></Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <Col span={24}><Text strong>Progress</Text></Col>
                </Row>
                <Row>
                  <Col span={24}><Progress></Progress></Col>
                </Row>
              </Col>
            </Row>
            <Row style={{marginBottom: 15, marginTop: 15}}>
              <Col span={24}><Text italic>REASSSSSSSSSSSOOOOOOOONNNNNNNNN</Text></Col>
            </Row>
            <Row style={{marginBottom: 8, marginTop: 8}}>
              <Col span={5}>
              <Row>
                  <Col span={24}><DownloadOutlined />&nbsp;<Text strong>Units Needed</Text></Col>
                </Row>
                <Row>
                  <Col span={24}><Title level={4}>10</Title></Col>
                </Row>
              </Col>
              <Col span={5}>
                <Row>
                  <Col span={24}><BgColorsOutlined />&nbsp;<Text strong>Total Donation</Text></Col>
                </Row>
                <Row>
                  <Col span={24}><Title level={4}>+1</Title></Col>
                </Row>
              </Col>
             
            </Row>
          </Card>            
    );
  }
}

export default RequestCard;