import Col from "antd/es/col";
import Row from "antd/es/row";

import { ChartCard } from "@/components/ChartCard";
import { CovidCasesChart } from "@/components/CovidCasesChart";
import { CovidDeathsChart } from "@/components/CovidDeathsChart";
import { fetchCovidData } from "@/utils/covidData";
import { DashboardHeader } from "@/components/DashboardHeader";

export default async function Home() {
  const casesData = await fetchCovidData("COVID-19_cases_casesByDay");
  const deathsData = await fetchCovidData("COVID-19_deaths_ONSByDay");

  return (
    <>
      <DashboardHeader />
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
