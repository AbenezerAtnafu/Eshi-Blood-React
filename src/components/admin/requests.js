import React from "react";
import {
  Table,
  Input,
  Button,
  Space,
  Drawer,
  Col,
  Row,
  Card,
  Typography,
} from "antd";
import Highlighter from "react-highlight-words";
import {
  PlusOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import CreateRequest from "./createRequest";
const axios = require("axios");
const { Title } = Typography;

const cardStyle = {
  borderRadius: "16px",
  marginRight: "24px",
  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
};


class EventsList extends React.Component {
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
      .get("http://127.0.0.1:5000/requests/", {
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
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const columns = [
      {
        title: "Request Reason",
        dataIndex: "RequestReason",
        key: "RequestReason",

        ...this.getColumnSearchProps("RequestReason"),
      },
      {
        title: "Units Needed",
        dataIndex: "UnitsNeeded",
        key: "UnitsNeeded",

        ...this.getColumnSearchProps("UnitsNeeded"),
      },
      {
        title: "Total Donation",
        dataIndex: "TotalDonation",
        key: "TotalDonation",
        ...this.getColumnSearchProps("TotalDonation"),
      },
      {
        title: "STATUS",
        dataIndex: "Status",
        key: "Status",
        ...this.getColumnSearchProps("Status"),
      },
      {
        title: "TYPE",
        dataIndex: "Type",
        key: "Type",
        ...this.getColumnSearchProps("Type"),
      },
      {
        title: "Action",
        dataIndex: "",
        key: "x",
        width: "10%",
        render: () => (
          <>
            <Link to="/admin/events/create" style={{ marginLeft: "1rem" }}>
              <CloseCircleOutlined
                style={{ fontSize: "16px", color: "#08c" }}
              />
            </Link>{" "}
            <Link to="/admin/events/create" style={{ marginLeft: "1rem" }}>
              <DeleteOutlined style={{ fontSize: "16px", color: "#08c" }} />
            </Link>
          </>
        ),
      },
    ];

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <>
          <Card>
            <Row>
              <Col span={14}>
                <Title level={2}>Requests</Title>
              </Col>
              <Col span={2} offset={7}>
                <Button type="primary" onClick={this.showDrawer}>
                  <PlusOutlined /> New Request
                </Button>
              </Col>
            </Row>
            <Drawer
              title="Create a new Request"
              width={720}
              onClose={this.onClose}
              visible={this.state.visible}
              bodyStyle={{ paddingBottom: 80 }}
            >
              <CreateRequest onClose={this.onClose} />
            </Drawer>

            <Card style={cardStyle}>
              <Table
                loading={!isLoaded}
                rowKey={(record) => `${record.UpdatedBy}`}
                columns={columns}
                dataSource={items}
              />
            </Card>
          </Card>
        </>
      );
    }
  }
}

export default EventsList;
