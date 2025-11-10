import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const RepoStatsChart = ({ repoStats }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = document.getElementById("repoChart").getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "bar", // You can change the type (line, pie, etc.)
      data: {
        labels: [ "Watchers", "Stars", "Forks", "Open Issues", "Commits"], // Labels for stats
        datasets: [
          {
            label: [repoStats.name + " statistics"],
            data: [
              repoStats.watchers,
              repoStats.stargazers_count,
              repoStats.forks,
              repoStats.open_issues,
              repoStats.commits_count || 0,
            ],
            backgroundColor: [
              "rgba(75, 192, 192, 0.4)",
              "rgba(255, 159, 64, 0.4)",
              "rgba(153, 102, 255, 0.4)",
              "rgba(255, 99, 132, 0.4)",
              "rgba(54, 162, 235, 0.4)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 2)",
              "rgba(255, 159, 64, 2)",
              "rgba(153, 102, 255, 2)",
              "rgba(255, 99, 132, 2)",
              "rgba(54, 162, 235, 2)",
            ],
            borderWidth: 1,
            borderRadius: 8,
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
                    size: 16,
                    weight: 'bold'
                },
                color: 'rgba(250, 250, 250, 0.9)'
              }
          },
      },
        scales: {
          x: {
            ticks: {
                font: {
                    family: 'Poppins',
                    size: 13,
                    weight: 'bold',
                },
                color: 'rgba(250, 250, 250, 0.9)',
            },
        },
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                  family: 'Poppins',
                  size: 13,
                  weight: 'bold',
              },
              color: 'rgba(250, 250, 250, 0.9)',
          },
          },
        },
      },
    });
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [repoStats]);

  return (
    <div className="chart-container">
      <canvas id="repoChart"></canvas>
    </div>
  );
};

export default RepoStatsChart;