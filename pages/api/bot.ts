import type { NextApiRequest, NextApiResponse } from 'next';

type BotRequest = {
  question: string;
  userId?: string;
};

type BotResponse = {
  prediction: string;
  confidence: number;
  timestamp: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BotResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не поддерживается' });
  }

  try {
    const { question, userId } = req.body as BotRequest;

    if (!question) {
      return res.status(400).json({ error: 'Вопрос не может быть пустым' });
    }

    // TODO: Здесь будет интеграция с вашим ботом предсказаний
    // Пока возвращаем тестовый ответ
    const prediction = "В ближайшее время вас ждут позитивные изменения в личной жизни. Возможны новые знакомства и интересные предложения.";
    const confidence = 0.85;
    const timestamp = new Date().toISOString();

    return res.status(200).json({
      prediction,
      confidence,
      timestamp,
    });
  } catch (error) {
    console.error('Ошибка при обработке запроса к боту:', error);
    return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
} 