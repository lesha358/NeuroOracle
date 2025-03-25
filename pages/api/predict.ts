import type { NextApiRequest, NextApiResponse } from 'next';

type PredictionResponse = {
  prediction: string;
  confidence: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PredictionResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не поддерживается' });
  }

  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Вопрос не может быть пустым' });
    }

    // TODO: Здесь будет интеграция с вашим ботом предсказаний
    // Пока возвращаем тестовый ответ
    const prediction = "В ближайшее время вас ждут позитивные изменения в личной жизни. Возможны новые знакомства и интересные предложения.";
    const confidence = 0.85;

    return res.status(200).json({
      prediction,
      confidence,
    });
  } catch (error) {
    console.error('Ошибка при обработке предсказания:', error);
    return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
} 