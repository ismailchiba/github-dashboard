import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import "../styles/ChartPie.css"

Chart.register(...registerables);

const ChartPie = ({ languages }) => {
  const pieChartRef = useRef(null); // Reference for the pie chart instance

  useEffect(() => {
    if (Object.keys(languages).length === 0) return;

    const pieCtx = document.getElementById("languagesPieChart").getContext("2d");

    // Destroy previous pie chart instance if it exists
    if (pieChartRef.current) {
      pieChartRef.current.destroy();
    }

    const totalBytes = Object.values(languages).reduce((acc, bytes) => acc + bytes, 0);

    const languageLabels = Object.keys(languages);
    const languageData = Object.values(languages).map((bytes) =>
      ((bytes / totalBytes) * 100).toFixed(2)
    );

    const backgroundColors = [
      "rgba(255, 99, 132, 0.4)",
      "rgba(54, 162, 235, 0.4)",
      "rgba(255, 206, 86, 0.4)",
      "rgba(75, 192, 192, 0.4)",
      "rgba(153, 102, 255, 0.4)",
      "rgba(255, 160, 64, 8)",
    ];

    const borderColors = [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ];

    // Create a new pie chart
    pieChartRef.current = new Chart(pieCtx, {
      type: "pie",
      data: {
        labels: languageLabels,
        datasets: [
          {
            label: "Languages",
            data: languageData,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                family: 'Poppins',
                size: 14,
              },
              color: 'rgba(250, 250, 250, 0.9)',
            },
          },
          title: {
            display: true,
            text: 'languages used %',
            font: {
              family: 'Poppins',
              size: 16,
              weight: 'bold',
          },
          color: 'rgba(250, 250, 250, 0.9)',
        },
        },
      },
    });

    return () => {
      // Clean up the pie chart instance
      if (pieChartRef.current) {
        pieChartRef.current.destroy();
      }
    };
  }, [languages]);

  return (
    <div className="chart--pie">
      {/* <h3>Languages Used (%)</h3> */}
      <canvas id="languagesPieChart"></canvas>
    </div>
  );
};

export default ChartPie;
