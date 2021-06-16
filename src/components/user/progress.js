import { Form, Input, Button, Typography, Card } from "antd";
import Header from "../../components/user/header";
import Events from "../user/event/events";
import { Slider } from 'antd';

import "./style.css";

const Progress = () => {
  function onChange(value) {
    console.log('onChange: ', value);
  }
  
  function onAfterChange(value) {
    console.log('onAfterChange: ', value);
  }
  
  return (
    <>
    <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
    <Slider
      range
      step={10}
      defaultValue={[20, 50]}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
  </>
  );
};

export default Progress;
