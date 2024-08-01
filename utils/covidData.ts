import dayjs from "dayjs";

import { APITimeSeriesList, PaginatedAPITimeSeriesListList } from "./types";

export const fetchCovidData = async (
  metric: string
): Promise<APITimeSeriesList[]> => {
  const url = new URL(
    `https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/${metric}`
  );

  url.searchParams.set("epiweek", "29");
  url.searchParams.set("year", "2021");

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = (await response.json()) as PaginatedAPITimeSeriesListList;

  return data.results.map((item) => ({
    ...item,
    date: dayjs(item.date).format("DD.MM.YYYY"),
  }));
};
