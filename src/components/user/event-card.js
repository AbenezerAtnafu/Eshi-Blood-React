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
                  <Col span={24}><Title level={4}>{this.props.event.EventName}</Title></Col>
                </Row>
                
                <Row gutter={[16, 24]}>
                  <Col className="gutter-row" span={4}>
                    <div style={style}><PhoneTwoTone />&nbsp;<Text type="secondary">{this.props.event.FirstName}</Text></div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <div style={style}><CalendarTwoTone />&nbsp;<Text type="secondary">{this.props.event.StartDate}</Text></div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <div style={style}><CalendarTwoTone />&nbsp;<Text type="secondary">{this.props.event.EndDate}</Text></div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <div style={style}><BulbTwoTone /><Text type="secondary">{this.props.event.EventGoal}</Text></div>
                  </Col>
                </Row>
                <Row>
                  <Col style={{paddingTop: 5}} span={16}><Text italic>{this.props.event.EventSlogan}</Text></Col>
                  <Col span={4}><Title level={5}>Goal/Total Donation</Title></Col>
                  <Col span={4}><Progress percent={((this.props.event.TotalDonations / this.props.event.EventGoal) * 100).toFixed(2)}/></Col>
                </Row>
                <Divider orientation="left"></Divider>
                <Row>
                  <Col className="gutter-row" span={3}>
                    <div style={style}><Title level={5}><Text type="secondary">Total Donation</Text></Title></div>
                  </Col>
                  <Col className="gutter-row" span={3}>
                    <div style={style}><Title level={4}><Text keyboard>{this.props.event.TotalDonations}</Text></Title></div>
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