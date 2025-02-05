import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
interface IPageVisitsVsSales {}
const PageVisitsVsSales: FC<IPageVisitsVsSales> = ({}) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: false,
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
        },
        pointStyle: "circle",
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
          drawBorder: false,
          color: "rgba(119, 119, 142, 0.08)",
        },
        ticks: {
          color: "#9ba6b5",
          fontColor: "#b0bac9",
          autoSkip: true,
        },
        scaleLabel: {
          display: false,
          labelString: "Month",
          fontColor: "transparent",
        },
      },
      y: {
        ticks: {
          color: "#9ba6b5",
          min: 0,
          max: 1050,
          stepSize: 150,
          fontColor: "#b0bac9",
        },
        display: true,
        grid: {
          display: false,
          drawBorder: false,
          zeroLineColor: "rgba(142, 156, 173,0.1)",
          color: "rgba(142, 156, 173,0.1)",
        },
        scaleLabel: {
          display: false,
          labelString: "sales",
          fontColor: "transparent",
        },
      },
    },
    title: {
      display: false,
      text: "Normal Legend",
    },
  };
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Page Visits",
        borderColor: "#05c3fb",
        backgroundColor: "#05c3fb",
        data: [200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454],
        tension: 0.3,
        borderWidth: 3,
        pointRadius: 0,
      },
      {
        fill: true,
        label: "Sales",
        data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210],
        borderColor: "#6c5ffc",
        backgroundColor: "rgba(108, 95, 252, 0.6)",
        tension: 0.3,
        borderWidth: 3,
        pointRadius: 0,
      },
    ],
  };
  const PageVisitsVsSalesChart = () => {
    return (
      <>
        <Line
          className="chart-dropshadow h-330"
          options={options}
          data={data}
        />
      </>
    );
  };
  return (
    <>
      <div className="col-12 col-xxl-9 d-flex mb-5">
        <Card
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
          className="h-100 w-100"
        >
          <Card.Header className="border-0 py-6">
            <Card.Title as="h3" className="fw-600">
              Page Visits vs Sales
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="chartjs-wrapper-demo myChartSaah">
              <PageVisitsVsSalesChart />
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default PageVisitsVsSales;
