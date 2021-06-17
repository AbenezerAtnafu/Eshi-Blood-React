import React from "react";
import { Table, Input, Button, Space, Card, Row, Col } from "antd";
import { Typography } from "antd";
import { CheckCircleOutlined, SearchOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";
const axios = require("axios");
const { Title } = Typography;
const cardStyle = {
  borderRadius: "16px",
  marginRight: "24px",
  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
};

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      searchText: "",
      searchedColumn: "",
      visible: false,
    };
  }
  getCookie = (cookieName) => {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie[cookieName];
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:5000/appointments/", {
        headers: {
          token: this.getCookie("token"),
        },
      })
      .then(
        (result) => {
          console.log(result);
          //res.json();
          if (result.data)
            this.setState({
              isLoaded: true,
              items: result.data,
            });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  headers = {
    token: this.getCookie("token"),
  };
  appointAccept = (aptId) => {
    console.log(aptId);
    axios
      .get(
        `http://127.0.0.1:5000/appointments/${aptId}/accept/`,

        {
          headers: this.headers,
        }
      )
      .then(
        (result) => {
          console.log(result);
          document.location.reload();
        },
        (error) => {}
      )
      .catch((error) => {
        console.log(error);
      });
  };
  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const { error, isLoaded, items } = this.state;
    const columns = [
      {
        title: "Appointment Description",
        dataIndex: "AppointmentDescription",
        key: "AppointmentDescription",
        //width: "30%",
        ...this.getColumnSearchProps("AppointmentDescription"),
      },
      {
        title: "Created At",
        dataIndex: "CreatedAt",
        key: "CreatedAt",
        //width: "20%",
        ...this.getColumnSearchProps("CreatedAt"),
      },

      {
        title: "Appointed BY",
        dataIndex: "UserName",
        key: "UserName",
        ...this.getColumnSearchProps("UserName"),
      },

      {
        title: "Donation Center",
        dataIndex: "DonationCenter",
        key: "DonationCenter",
        ...this.getColumnSearchProps("DonationCenter"),
      },
      {
        title: "Apt Type",
        dataIndex: "Type",
        key: "Type",
        ...this.getColumnSearchProps("Type"),
      },

      {
        title: "STATUS",
        dataIndex: "Status",
        key: "Status",
        ...this.getColumnSearchProps("Status"),
      },
      {
        title: "ACTION",
        dataIndex: "AppointmentId",
        key: "AppointmentId",
        render: (text, record) => (
          <>
            <Button
              onClick={() => this.appointAccept(record.AppointmentId)}
              //()=>{record.Status === "Active" ? disabled : ""}
              disabled={record.Status === "Active"}
              style={{ marginLeft: "1rem" }}
            >
              <CheckCircleOutlined
                style={{ fontSize: "16px", color: "#08c" }}
              />
            </Button>
          </>
        ),
      },
    ];

    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <Card>
            <Row>
              <Col span={14}>
                <Title level={2}>Appointments</Title>
              </Col>
            </Row>
            <Card style={cardStyle}>
              <Table
                loading={!isLoaded}
                columns={columns}
                dataSource={items}
                rowKey={(rowKey) => `${rowKey.AppointmentId}`}
              />
            </Card>
          </Card>
        </div>
      );
    }
  }
}

export default Appointments;
