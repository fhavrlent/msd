"use client";

import { useEffect, useRef } from "react";
import { Chart } from "@antv/g2";

import { CovidDataList } from "@/utils/covidData";

export const CovidCasesChart = ({ data }: { data: CovidDataList }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = new Chart({
        container: chartContainerRef.current,
        autoFit: true,
      });

      chart.data(data);
      chart.scale("metric_value", {
        nice: true,
      });

      chart.line().encode("x", "date").encode("y", "metric_value");

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return <div ref={chartContainerRef}></div>;
};
