import {
  DownloadOutlined,
  FileOutlined,
  FilterOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space, MenuProps } from "antd";
import Col from "antd/es/col";
import Row from "antd/es/row";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    label: "Export to PDF",
    icon: <DownloadOutlined />,
  },
  {
    key: "2",
    label: "Notes (3)",
    icon: <FileOutlined />,
  },
  {
    key: "3",
    label: "Filter (9+)",
    icon: <FilterOutlined />,
  },
];

export const DashboardHeader = () => (
  <Row className="mb-4">
    <Col span={12}>
      <h1 className="text-x">Covid Graphs</h1>
    </Col>
    <Col span={12} className="text-right hidden lg:block">
      <Space size={"middle"}>
        <Button icon={<DownloadOutlined />} type="default" iconPosition="end">
          Export to PDF
        </Button>
        <Button
          icon={<FileOutlined twoToneColor={"green"} />}
          type="default"
          iconPosition="end"
        >
          Notes (3)
        </Button>
        <Button icon={<FilterOutlined />} type="default" iconPosition="end">
          Filter (9+)
        </Button>
      </Space>
    </Col>
    <Col span={12} className="text-right block lg:hidden">
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Button icon={<MoreOutlined />} />
      </Dropdown>
    </Col>
  </Row>
);
