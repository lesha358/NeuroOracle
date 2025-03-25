import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Category {
  name: string;
  count: number;
  accuracy: number;
}

interface StatsPieChartProps {
  data: Category[];
}

export const StatsPieChart: React.FC<StatsPieChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(category => category.name),
    datasets: [
      {
        data: data.map(category => category.count),
        backgroundColor: [
          'rgba(139, 92, 246, 0.8)',
          'rgba(167, 139, 250, 0.8)',
          'rgba(192, 132, 252, 0.8)',
          'rgba(216, 180, 254, 0.8)',
          'rgba(233, 213, 255, 0.8)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  };

  return <Pie data={chartData} options={options} />;
}; 