import React, { useState } from 'react';
import { Avatar, Card, Layout, Form, Input, Cascader, DatePicker, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./style.css";

const { Header, Footer, Sider, Content } = Layout;

const { Option } = Select;
const residences = [
    {
        value: 'Addis Ababa',
        label: 'Addis Ababa',
        children: [
            {
                value: 'Saris',
                label: 'Saris',
                children: [
                    {
                        value: '05',
                        label: '05',
                    },
                ],
            },
        ],
    },
    {
        value: 'Amhara',
        label: 'Amhara',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
    {
        value: 'Afar',
        label: 'Afar',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
    {
        value: 'Benishangul',
        label: 'Benishangul',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
    {
        value: 'Oromia',
        label: 'Oromia',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
    {
        value: 'South Nations',
        label: 'South Nations',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
    {
        value: 'Sidama State',
        label: 'Sidama State',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
    {
        value: 'Gambela',
        label: 'Gambela',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
    {
        value: 'Somali',
        label: 'Somali',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
    {
        value: 'Harari',
        label: 'Harari',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
    {
        value: 'Dire Dawa',
        label: 'Dire Dawa',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function handleChange(value) {
    console.log(`selected ${value}`);
}

const ProfileDetail = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 80,
                }}
            >
                <Option value="251">+251</Option>
            </Select>
        </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));
    return (<>
        <Layout>
            <Header>Header</Header>
            <Content>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={8}>
                        <Card title="Personal Information Details" className="edit-form" style={{ width: 400 }}>
                            <Row>
                                <Col span={24}>
                                    <Avatar className="avatar" size={64} icon={<UserOutlined />} />
                                </Col>
                            </Row>
                            <div className="details">
                                <Row>
                                    <Col md={12}>Full name</Col>
                                    <Col md={12}>Abebe Weynua</Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>Username</Col>
                                    <Col sm={12}>Gaga</Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>Gender</Col>
                                    <Col sm={12}>Male</Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>Birth date</Col>
                                    <Col sm={12}>12/10/2000</Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>Martial Status</Col>
                                    <Col sm={12}>Single</Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>Blood Type</Col>
                                    <Col sm={12}>A</Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>Appointments</Col>
                                    <Col sm={12}>0</Col>
                                </Row>

                            </div>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Form className="edit-form"
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{
                                residence: ['Addis Ababa', '6Kilo', 'ShiroMeda'],
                                prefix: '251',
                            }}
                            scrollToFirstError
                        >
                            <Form.Item label="First name">
                                <Input placeholder="First name" />
                            </Form.Item>
                            <Form.Item label="Last name">
                                <Input placeholder="Last name" />
                            </Form.Item>
                            <Form.Item label="Gender">
                                <Select defaultValue="Male" style={{ width: 120 }} onChange={handleChange}>
                                    <Option value="Male">Male</Option>
                                    <Option value="Female">Female</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Birth date">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item label="User name">
                                <Input placeholder="User name" />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input placeholder="Email" />
                            </Form.Item>

                            <Form.Item label="Martial Status">
                                <Select defaultValue="Single" style={{ width: 120 }} onChange={handleChange}>
                                    <Option value="Male">Single</Option>
                                    <Option value="Female">Married</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="residence"
                                label="Address"
                                rules={[
                                    {
                                        type: 'array',
                                        required: true,
                                        message: 'Please enter your address!',
                                    },
                                ]}
                            >
                                <Cascader options={residences} />
                            </Form.Item>

                            <Form.Item
                                name="bloodtype"
                                label="Blood Type"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select gender!',
                                    },
                                ]}
                            >
                                <Select placeholder="Blood Type">
                                    <Option value="A">A</Option>
                                    <Option value="B">B</Option>
                                    <Option value="AB">AB</Option>
                                    <Option value="O">O</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}
                            >
                                <Input
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Update
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col sm={4}></Col>

                </Row>

            </Content>
            <Footer>Footer</Footer>
        </Layout>

        
    </>
    )
}

export default ProfileDetail;