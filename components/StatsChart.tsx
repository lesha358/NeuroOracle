import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from 'next-themes';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Category {
  name: string;
  count: number;
  accuracy: number;
}

interface StatsChartProps {
  data: Category[];
}

export const StatsChart: React.FC<StatsChartProps> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const chartData = {
    labels: data.map(category => category.name),
    datasets: [
      {
        label: 'Точность (%)',
        data: data.map(category => category.accuracy),
        borderColor: isDark ? '#818CF8' : '#4F46E5',
        backgroundColor: isDark ? 'rgba(129, 140, 248, 0.5)' : 'rgba(79, 70, 229, 0.5)',
        borderWidth: 2,
        pointBackgroundColor: isDark ? '#818CF8' : '#4F46E5',
        pointBorderColor: isDark ? '#818CF8' : '#4F46E5',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: isDark ? '#E5E7EB' : '#374151',
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: isDark ? '#E5E7EB' : '#374151',
        },
      },
      x: {
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: isDark ? '#E5E7EB' : '#374151',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}; 