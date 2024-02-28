import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mysql';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectToDatabase();

  if (req.method === 'POST') {
    const { title, h_line, img, ppp } = req.body;
    await db.execute(
      'INSERT INTO xxx (title, h_line, img, ppp) VALUES (?, ?, ?, ?)',
      [title, h_line, img, ppp]
    );
    res.status(201).json({ message: 'Post added successfully' });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
