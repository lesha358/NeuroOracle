import type { NextApiRequest, NextApiResponse } from 'next';

type PaymentRequest = {
  amount: number;
  currency: string;
  plan: string;
  userId?: string;
};

type PaymentResponse = {
  paymentId: string;
  status: string;
  redirectUrl?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaymentResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не поддерживается' });
  }

  try {
    const { amount, currency, plan, userId } = req.body as PaymentRequest;

    if (!amount || !currency || !plan) {
      return res.status(400).json({ error: 'Не все необходимые данные предоставлены' });
    }

    // TODO: Здесь будет интеграция с платежной системой (например, YooKassa)
    // Пока возвращаем тестовый ответ
    const paymentId = 'test_payment_' + Date.now();
    const status = 'pending';
    const redirectUrl = 'https://example.com/payment';

    return res.status(200).json({
      paymentId,
      status,
      redirectUrl,
    });
  } catch (error) {
    console.error('Ошибка при обработке платежа:', error);
    return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
} 