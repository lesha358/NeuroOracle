import type { NextApiRequest, NextApiResponse } from 'next';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean; message: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Метод не поддерживается' });
  }

  try {
    const { name, email, message } = req.body as ContactFormData;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Пожалуйста, заполните все поля формы',
      });
    }

    // TODO: Здесь будет логика отправки email или сохранения в базу данных
    console.log('Получены данные формы:', { name, email, message });

    return res.status(200).json({
      success: true,
      message: 'Сообщение успешно отправлено',
    });
  } catch (error) {
    console.error('Ошибка при обработке формы:', error);
    return res.status(500).json({
      success: false,
      message: 'Произошла ошибка при отправке сообщения',
    });
  }
} 