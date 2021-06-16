import { Component } from 'react';
import { Skeleton, Switch, Card, Typography, Avatar, Row, Col, Button, Divider, Progress} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,PhoneTwoTone, CalendarTwoTone, BulbTwoTone } from '@ant-design/icons';
import "./style.css";
const { Text, Link } = Typography;

const { Title } = Typography;

const { Meta } = Card;

const style = {padding: '8px 0' };

class EventCard extends Component {
  state = {
    loading: true,
  };
  
  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <Row>
          <Col span={3}>

          </Col>
          <Col span={16}>
            <div style={{padding: 20}}>
              <Card className="event-box-shadow" type="inner" title="Event" extra={<Button type="primary">Appoint</Button>}>
                <Row>
                  <Col span={24}><Title level={4}>Name</Title></Col>
                </Row>
                
                <Row gutter={[16, 24]}>
                  <Col className="gutter-row" span={3}>
                    <div style={style}><PhoneTwoTone />&nbsp;<Text type="secondary">+251966303009</Text></div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <div style={style}><CalendarTwoTone />&nbsp;<Text type="secondary">00/00/0001</Text></div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <div style={style}><CalendarTwoTone />&nbsp;<Text type="secondary">00/00/0001</Text></div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <div style={style}><BulbTwoTone /><Text type="secondary">20</Text></div>
                  </Col>
                </Row>
                <Row>
                  <Col style={{paddingTop: 5}} span={16}><Text italic>SLLOOOOGGGGAAAANNNNNNNNNNNNNNNN</Text></Col>
                  <Col span={4}><Title level={5}>Goal/Total Donation</Title></Col>
                  <Col span={4}><Progress></Progress></Col>
                </Row>
                <Divider orientation="left"></Divider>
                <Row>
                  <Col className="gutter-row" span={3}>
                    <div style={style}><Title level={4}><Text type="secondary">Total Donation</Text></Title></div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <div style={style}><Title level={4}><Text keyboard>15</Text></Title></div>
                  </Col>
              
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
        
      </>
    );
  }
}

export default EventCard;