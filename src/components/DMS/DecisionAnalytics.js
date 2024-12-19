import React, { useEffect, useState } from 'react';
import '../../styles/DecisionAnalytics.css';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically registers Chart.js components

const DecisionAnalytics = () => {
  const [participationData, setParticipationData] = useState({});
  const [outcomeData, setOutcomeData] = useState({});
  const [efficiencyTrends, setEfficiencyTrends] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching analytics data
    const fetchData = () => {
      setLoading(true);
      setParticipationData({
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Participation Rates (%)',
            data: [75, 80, 85, 90],
            backgroundColor: '#367162', // Lab4GPS Green
          },
        ],
      });

      setOutcomeData({
        labels: ['Approved', 'Rejected', 'Pending'],
        datasets: [
          {
            label: 'Decision Outcomes',
            data: [50, 30, 20],
            backgroundColor: ['#4caf50', '#f44336', '#ff9800'], // Green, Red, Orange
          },
        ],
      });

      setEfficiencyTrends({
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Average Decision Time (Days)',
            data: [15, 12, 10, 8, 7],
            fill: false,
            borderColor: '#141e3f', // Lab4GPS Blue
            tension: 0.4,
          },
        ],
      });

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="decision-analytics-wrapper">
      <h2 className="decision-analytics-title">Decision Analytics</h2>
      {loading ? (
        <p className="decision-analytics-loading">Loading analytics data...</p>
      ) : (
        <div className="decision-analytics-content">
          <div className="decision-analytics-chart-card">
            <h3 className="decision-analytics-chart-title">Participation Rates</h3>
            <Bar data={participationData} options={{ responsive: true }} />
          </div>

          <div className="decision-analytics-chart-card">
            <h3 className="decision-analytics-chart-title">Decision Outcomes</h3>
            <Pie data={outcomeData} options={{ responsive: true }} />
          </div>

          <div className="decision-analytics-chart-card">
            <h3 className="decision-analytics-chart-title">Decision Efficiency Trends</h3>
            <Line data={efficiencyTrends} options={{ responsive: true }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DecisionAnalytics;
