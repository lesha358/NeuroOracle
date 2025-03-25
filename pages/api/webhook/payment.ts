import type { NextApiRequest, NextApiResponse } from 'next';

type WebhookEvent = {
  event: string;
  paymentId: string;
  status: string;
  amount: number;
  currency: string;
  timestamp: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean; message: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Метод не поддерживается' });
  }

  try {
    const event = req.body as WebhookEvent;

    if (!event || !event.event || !event.paymentId) {
      return res.status(400).json({
        success: false,
        message: 'Неверный формат данных',
      });
    }

    // TODO: Здесь будет логика обработки вебхука от платежной системы
    console.log('Получен вебхук:', event);

    switch (event.event) {
      case 'payment.succeeded':
        // Обработка успешного платежа
        console.log('Платеж успешно обработан:', event.paymentId);
        break;
      case 'payment.failed':
        // Обработка неудачного платежа
        console.log('Платеж не удался:', event.paymentId);
        break;
      default:
        console.log('Неизвестное событие:', event.event);
    }

    return res.status(200).json({
      success: true,
      message: 'Вебхук успешно обработан',
    });
  } catch (error) {
    console.error('Ошибка при обработке вебхука:', error);
    return res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера',
    });
  }
} 