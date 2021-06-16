import React from "react";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const data = [
  {
    key: "5",
    Status: "Pending",
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

class EventsList extends React.Component {
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
        sorter: (a, b) => a.EventName.length - b.EventName.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Slogan",
        dataIndex: "Slogan",
        key: "Slogan",
        width: "20%",
        ...this.getColumnSearchProps("Slogan"),
        sorter: (a, b) => a.Slogan.length - b.Slogan.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "EventGoal",
        dataIndex: "EventGoal",
        key: "EventGoal",
        ...this.getColumnSearchProps("EventGoal"),
        sorter: (a, b) => a.EventGoal.length - b.EventGoal.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Total Donations",
        dataIndex: "TotalDonations",
        key: "TotalDonations",
        ...this.getColumnSearchProps("TotalDonations"),
        sorter: (a, b) => a.TotalDonations.length - b.TotalDonations.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Start Date",
        dataIndex: "startDate",
        key: "startDate",
        ...this.getColumnSearchProps("startDate"),
        sorter: (a, b) => a.startDate.length - b.startDate.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "End Date",
        dataIndex: "endDate",
        key: "endDate",
        ...this.getColumnSearchProps("endDate"),
        sorter: (a, b) => a.endDate.length - b.endDate.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Organizer Name",
        dataIndex: "organizerName",
        key: "organizerName",
        ...this.getColumnSearchProps("organizerName"),
        sorter: (a, b) => a.organizerName.length - b.organizerName.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Organizer's Phone",
        dataIndex: "organizerPhone",
        key: "organizerPhone",
        ...this.getColumnSearchProps("organizerPhone"),
        sorter: (a, b) => a.organizerPhone.length - b.organizerPhone.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Status",
        dataIndex: "Status",
        key: "Status",
        ...this.getColumnSearchProps("Status"),
        sorter: (a, b) => a.Status.length - b.Status.length,
        sortDirections: ["descend", "ascend"],
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
        <button>New Event</button>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default EventsList;
