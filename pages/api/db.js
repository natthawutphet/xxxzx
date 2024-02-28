import mysql from 'mysql2/promise';

// ฟังก์ชันสำหรับเชื่อมต่อฐานข้อมูล
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
  try {
    const db = await connectToDatabase();
    // ตัวอย่าง: ดึงข้อมูลจากตาราง `users`
    const [rows, fields] = await db.execute('SELECT * FROM xxx');
    res.json(rows);
  } catch (error) {
    console.error('Database connection error', error);
    res.status(500).send('Database connection error');
  }
};
