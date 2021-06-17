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
import CreateDonationCenter from "./createDonationCenter";
import { Link } from "react-router-dom";
const axios = require("axios");
const { Title } = Typography;

const cardStyle = {
  borderRadius: "16px",
  marginRight: "24px",
  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
};

const data = [
  {
    key: "5",
    Status: "Pending",
    Slogan: "Let's Donate",

    UpdatedAt: null,
    EventName: "Request",
    EventGoal: 50,
    EventOrganizer: 2,
    TotalDonations: 10,
    EventId: 3,
    CreatedAt: "Jun 16 2020",
  },
  {
    key: "6",
    Status: "Closed",
    Slogan: "Let's Donate",

    UpdatedAt: null,
    EventName: "rotract blood donating session",
    EventGoal: 50,
    EventOrganizer: 2,
    TotalDonations: 10,
    EventId: 3,
    CreatedAt: "Jun 16 2020",
  },
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

class DonationCenter extends React.Component {
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
      .get("http://127.0.0.1:5000/donationcenters/", {
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

  formSubmit = () => {};

  render() {
    const columns = [
      {
        title: "Donation Center Name",
        dataIndex: "DonationCenterName",
        key: "DonationCenterName",

        ...this.getColumnSearchProps("DonationCenterName"),
      },
      {
        title: "Created At",
        dataIndex: "CreatedAt",
        key: "CreatedAt",
        ...this.getColumnSearchProps("CreatedAt"),
      },

      {
        title: "Start Date",
        dataIndex: "StartDate",
        key: "StartDate",
        ...this.getColumnSearchProps("startDate"),
      },
      {
        title: "End Date",
        dataIndex: "EndDate",
        key: "EndDate",
        ...this.getColumnSearchProps("endDate"),
      },
      {
        title: "State",
        dataIndex: "State",
        key: "State",
        ...this.getColumnSearchProps("State"),
      },
      {
        title: "City",
        dataIndex: "City",
        key: "City",
        ...this.getColumnSearchProps("City"),
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
                <Title level={2}>Donation Center</Title>
              </Col>
              <Col span={2} offset={5}>
                <Button type="primary" onClick={this.showDrawer}>
                  <PlusOutlined /> New Donation Center
                </Button>
              </Col>
            </Row>

            <Card style={cardStyle}>
              <Drawer
                title="Create a new Donation Center"
                width={720}
                onClose={this.onClose}
                visible={this.state.visible}
                bodyStyle={{ paddingBottom: 80 }}
                // footer={
                //   <div
                //     style={{
                //       textAlign: "right",
                //     }}
                //   >
                //     <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                //       Cancel
                //     </Button>
                //     <Button onClick={this.onClose} type="primary">
                //       Submit
                //     </Button>
                //   </div>
                // }
              >
                <CreateDonationCenter onClose={this.onClose} />
              </Drawer>
              <Table
                rowKey={(record) => `${record.DonationCenterId}`}
                columns={columns}
                dataSource={items}
                loading={!isLoaded}
              />
            </Card>
          </Card>
        </>
      );
    }
  }
}

export default DonationCenter;
