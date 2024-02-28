import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mysql';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'DELETE') {
    await db.execute('DELETE FROM posts WHERE id = ?', [id]);
    res.json({ message: 'Post deleted successfully' });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
