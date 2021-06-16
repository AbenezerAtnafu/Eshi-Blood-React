import React from "react";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
  state = {
    searchText: "",
    searchedColumn: "",
  };

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

  render() {
    const columns = [
      {
        title: "Event Name",
        dataIndex: "EventName",
        key: "EventName",
        width: "30%",
        ...this.getColumnSearchProps("EventName"),
      },
      {
        title: "Slogan",
        dataIndex: "Slogan",
        key: "Slogan",
        width: "20%",
        ...this.getColumnSearchProps("Slogan"),
      },
      {
        title: "EventGoal",
        dataIndex: "EventGoal",
        key: "EventGoal",
        ...this.getColumnSearchProps("EventGoal"),
      },
      {
        title: "Total Donations",
        dataIndex: "TotalDonations",
        key: "TotalDonations",
        ...this.getColumnSearchProps("TotalDonations"),
      },
      {
        title: "Start Date",
        dataIndex: "startDate",
        key: "startDate",
        ...this.getColumnSearchProps("startDate"),
      },
      {
        title: "End Date",
        dataIndex: "endDate",
        key: "endDate",
        ...this.getColumnSearchProps("endDate"),
      },
      {
        title: "Organizer Name",
        dataIndex: "organizerName",
        key: "organizerName",
        ...this.getColumnSearchProps("organizerName"),
      },
      {
        title: "Organizer's Phone",
        dataIndex: "organizerPhone",
        key: "organizerPhone",
        ...this.getColumnSearchProps("organizerPhone"),
      },
      {
        title: "Status",
        dataIndex: "Status",
        key: "Status",
        ...this.getColumnSearchProps("Status"),
      },
      {
        title: "Action",
        dataIndex: "",
        key: "x",
        render: () => (
          <div>
            <a>Close</a> | <a>Delete</a>
          </div>
        ),
      },
    ];
    return (
      <div>
        <Button type="primary">
          <Link to="/admin/donationCenters/create">New Donation Center</Link>
        </Button>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default DonationCenter;
