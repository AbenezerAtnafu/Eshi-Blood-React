import { Form, Input, Button, Typography, Card, Row, Col } from "antd";
import EventCard from "../../../components/user/event-card";
import Header from "../../../components/user/header";
import RequestCard from "../../../components/user/request-card";
import React, {useState} from "react";

const RequestsPage = () => {

  const [request, setRequest] = useState([
    {
        "TotalDonation": 3,
        "UpdatedAt": null,
        "Status": "Active",
        "CreatedAt": null,
        "UnitsNeeded": 10,
        "RequestReason": "emergency 4",
        "BloodType": 6,
        "RequestId": 1
    },
    {
        "TotalDonation": 7,
        "UpdatedAt": null,
        "Status": "Active",
        "CreatedAt": null,
        "UnitsNeeded": 13,
        "RequestReason": "emergency req 1",
        "BloodType": 1,
        "RequestId": 2
    }
]);

  
  const handleSubmit = (values) => {
    console.log("Success:", values);
  };

  return (    
    <>
      <Row style={{margin: 30, height: '100vh'}}>
        {request.map((m) => {
          return (<Col span={12}>
          <RequestCard requests={m}/>
        </Col>)
        })} 
      </Row>  
    </>
  );
};

export default RequestsPage;
