import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const { Option } = Select;

const CreateAppointment = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    return (<>
        <Row>
            <Col span={8}></Col>
            <Col span={8}><h1>Create Appointment</h1></Col>
            <Col span={8}></Col>
        </Row>
        <Row>
            <Col span={2}></Col>
            <Col span={16}>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name={['user', 'name']}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Date">
                        <DatePicker />
                    </Form.Item>

                    <Form.Item name={['user', 'description']} label="Description">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>

            <Col span={6}></Col>
        </Row>
    </>
    );
};

export default CreateAppointment;