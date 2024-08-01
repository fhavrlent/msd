import {
  DownloadOutlined,
  FileOutlined,
  FilterOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";
import Col from "antd/es/col";
import Row from "antd/es/row";

import { ChartCard } from "@/components/ChartCard";
import { CovidCasesChart } from "@/components/CovidCasesChart";
import { CovidDeathsChart } from "@/components/CovidDeathsChart";
import { fetchCovidData } from "@/utils/covidData";

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

export default async function Home() {
  const casesData = await fetchCovidData("COVID-19_cases_casesByDay");
  const deathsData = await fetchCovidData("COVID-19_deaths_ONSByDay");

  return (
    <>
      <Row className="mb-4">
        <Col span={12}>
          <h1 className="text-x">Covid Graphs</h1>
        </Col>
        <Col span={12} className="text-right hidden lg:block">
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
        <Col span={12} className="text-right block lg:hidden">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Button icon={<MoreOutlined />} />
          </Dropdown>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <ChartCard title="COVID-19 Cases By Day">
            <CovidCasesChart data={casesData} />
          </ChartCard>
        </Col>
        <Col xs={24} lg={12}>
          <ChartCard title="COVID-19 Deaths By Day">
            <CovidDeathsChart data={deathsData} />
          </ChartCard>
        </Col>
      </Row>
    </>
  );
}
