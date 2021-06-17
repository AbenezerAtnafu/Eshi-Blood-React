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

  getBloodType = bloodType => {
    switch(bloodType){
      case 0:
        return "A"
      case 1:
        return "A+"
      case 2:
        return "A-"
      case 3:
        return "B"
      case 4:
        return "B+"
      case 5:
        return "B-"
      case 6:
        return "O"
      case 7:
        return "AB"
    }
  }

  render() {
    const { loading } = this.state;

    return (
          
          <Card className="box-shadow" title="Request" extra={<Button type="primary">Appoint</Button>} style={{ width: 700, marginBottom: 20, marginRight: 20 }}>
            <Row>
            
              <Col span={24}><Title level={4}>Blood Types: {this.getBloodType(this.props.requests.BloodType)}</Title></Col>
            </Row>
            <Divider orientation="left"></Divider>

            <Row style={{marginBottom: 15, marginTop: 15}}>
              <Col span={8}>
                <Row>
                  <Col span={24}><RiseOutlined/>&nbsp;<Text strong>Start Date</Text></Col>
                </Row>
                <Row>
                  <Col span={24}><Text type="success">{this.props.requests.CreatedAt}</Text></Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <Col span={24}><FallOutlined />&nbsp;<Text strong>Status</Text></Col>
                </Row>
                <Row>
                  <Col span={24}><Text type="danger">{this.props.requests.Status}</Text></Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <Col span={24}><Text strong>Progress</Text></Col>
                </Row>
                <Row>
                <Col span={24}><Progress percent={((this.props.requests.TotalDonation / this.props.requests.UnitsNeeded) * 100).toFixed(2)}/></Col>
                </Row>
              </Col>
            </Row>
            <Row style={{marginBottom: 15, marginTop: 15}}>
              <Col span={24}><Text italic>{this.props.requests.RequestReason}</Text></Col>
            </Row>
            <Row style={{marginBottom: 8, marginTop: 8}}>
              <Col span={5}>
              <Row>
                  <Col span={24}><DownloadOutlined />&nbsp;<Text strong>Units Needed</Text></Col>
                </Row>
                <Row>
                  <Col span={24}><Title level={4}>{this.props.requests.UnitsNeeded}</Title></Col>
                </Row>
              </Col>
              <Col span={5}>
                <Row>
                  <Col span={24}><BgColorsOutlined />&nbsp;<Text strong>Total Donation</Text></Col>
                </Row>
                <Row>
                  <Col span={24}><Title level={4}>+{this.props.requests.TotalDonation}</Title></Col>
                </Row>
              </Col>
             
            </Row>
          </Card>            
    );
  }
}

export default RequestCard;