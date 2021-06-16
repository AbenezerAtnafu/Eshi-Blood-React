import { Form, Input, Button, Typography, Card, Row, Col } from "antd";
import EventCard from "../../../components/user/event-card";
import Header from "../../../components/user/header";
import RequestCard from "../../../components/user/request-card";


const RequestsPage = () => {
  const handleSubmit = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <Row style={{margin: 30}}>
        
        <Col span={12}>
          <RequestCard>
          </RequestCard>
        </Col>
        
        <Col span={12}>
          <RequestCard>
          </RequestCard>
        </Col>
        <Col span={12}>
          <RequestCard>
          </RequestCard>
        </Col>
        
        <Col span={12}>
          <RequestCard>
          </RequestCard>
        </Col>
        <Col span={12}>
          <RequestCard>
          </RequestCard>
        </Col>
        
        <Col span={12}>
          <RequestCard>
          </RequestCard>
        </Col>
      </Row>
    
  
    
    </>
  );
};

export default RequestsPage;
