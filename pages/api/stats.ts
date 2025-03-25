import { NextApiRequest, NextApiResponse } from 'next';

type StatsData = {
  totalPredictions: number;
  accuracy: number;
  activeUsers: number;
  categories: {
    name: string;
    count: number;
    accuracy: number;
  }[];
};

const stats: StatsData = {
  totalPredictions: 15783,
  accuracy: 83,
  activeUsers: 847,
  categories: [
    { name: 'Любовь', count: 5234, accuracy: 85 },
    { name: 'Карьера', count: 4123, accuracy: 82 },
    { name: 'Здоровье', count: 2891, accuracy: 81 },
    { name: 'Финансы', count: 2345, accuracy: 84 },
    { name: 'Другое', count: 1190, accuracy: 80 }
  ]
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(stats);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 