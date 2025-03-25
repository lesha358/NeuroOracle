import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTheme } from 'next-themes';

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
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const chartData = {
    labels: data.map(category => category.name),
    datasets: [
      {
        data: data.map(category => category.count),
        backgroundColor: isDark ? [
          'rgba(167, 139, 250, 0.8)',
          'rgba(192, 132, 252, 0.8)',
          'rgba(216, 180, 254, 0.8)',
          'rgba(233, 213, 255, 0.8)',
        ] : [
          'rgba(139, 92, 246, 0.8)',
          'rgba(167, 139, 250, 0.8)',
          'rgba(192, 132, 252, 0.8)',
          'rgba(216, 180, 254, 0.8)',
        ],
        borderColor: isDark ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: isDark ? '#E5E7EB' : '#374151',
        },
      },
    },
  };

  return <Pie data={chartData} options={options} />;
}; 