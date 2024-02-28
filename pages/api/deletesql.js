import mysql from 'mysql2/promise';

// ฟังก์ชันเชื่อมต่อฐานข้อมูล
async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xxxx',
  });
  return connection;
}

export default async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { id } = req.query; // รับ id จาก query parameter
            const db = await connectToDatabase();
            
            // ลบโพสต์จากฐานข้อมูล
            const [result] = await db.execute('DELETE FROM posts WHERE id = ?', [id]);

            if (result.affectedRows > 0) {
                res.json({ message: 'Post deleted successfully' });
            } else {
                res.status(404).json({ message: 'Post not found' });
            }
        } catch(e) {
            console.error(e);
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        // จำกัดเฉพาะ POST request
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
};
