import {
  DownloadOutlined,
  FileOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import Breadcrumb from "antd/es/breadcrumb";
import Button from "antd/es/button";
import Col from "antd/es/col";
import Row from "antd/es/row";
import Space from "antd/es/space";

export default function Home() {
  return (
    <>
      <Row className="mb-4">
        <Col span={12}>
          <h1 className="text-x">Covid Graphs</h1>
        </Col>
        <Col span={12} className="text-right">
          <Space size={"middle"}>
            <Button
              icon={<DownloadOutlined />}
              type="default"
              iconPosition="end"
            >
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
      </Row>
      <Row gutter={16}>
        <Col span={12}>Card 1</Col>
        <Col span={12}>Card 2</Col>
      </Row>
    </>
  );
}
