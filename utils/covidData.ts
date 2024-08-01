import dayjs from "dayjs";

export type CovidData = {
  theme: string;
  sub_theme: string;
  topic: string;
  geography_type: string;
  geography: string;
  geography_code: string;
  metric: string;
  metric_group: string;
  stratum: string;
  sex: string;
  age: string;
  year: number;
  month: number;
  epiweek: number;
  date: string;
  metric_value: number;
  in_reporting_delay_period: boolean;
};

export type CovidDataList = CovidData[];

export const fetchCovidData = async (
  metric: string
): Promise<CovidDataList> => {
  const response = await fetch(
    `https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/${metric}?epiweek=29&year=2021`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data.results.map((item: CovidData) => ({
    ...item,
    date: dayjs(item.date).format("DD.MM.YYYY"),
  }));
};
