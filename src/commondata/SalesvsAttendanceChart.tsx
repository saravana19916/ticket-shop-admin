import { ApexOptions } from "apexcharts";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
  series: { name: string; data: number[] }[];
  categories: string[] | number[];
}

const SalesVsAttendanceChart: React.FC<ChartProps> = ({
  series,
  categories,
}) => {
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: "bar",
      sparkline: {
        enabled: true,
      },
      stacked: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        borderRadiusApplication: "end",
        distributed: true,
        columnWidth: "90%",
      },
    },
    colors: ["#51B1DF", "#53B9A9", "#ed003b"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 2, 2],
    },
    xaxis: {
      categories: categories,
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
      position: "front",
      padding: {
        top: 0,
        right: 3,
        bottom: 0,
        left: 3,
      },
    },
  });

  // Update options when categories change
  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      xaxis: {
        ...prevOptions.xaxis,
        categories: categories,
      },
    }));
  }, [categories]);

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={180}
      />
    </div>
  );
};

export default SalesVsAttendanceChart;
