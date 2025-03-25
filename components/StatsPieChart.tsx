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
          'rgba(129, 140, 248, 0.8)', // indigo-400
          'rgba(99, 102, 241, 0.8)',  // indigo-500
          'rgba(79, 70, 229, 0.8)',   // indigo-600
          'rgba(67, 56, 202, 0.8)',   // indigo-700
        ] : [
          'rgba(79, 70, 229, 0.8)',   // indigo-600
          'rgba(99, 102, 241, 0.8)',  // indigo-500
          'rgba(129, 140, 248, 0.8)', // indigo-400
          'rgba(165, 180, 252, 0.8)', // indigo-300
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