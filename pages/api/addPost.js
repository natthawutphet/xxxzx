import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("posts");
        
        // ดึงข้อมูลจาก req.body
        const { title, content, name, ppp, images, vdos } = req.body;

        const post = await db.collection("posts").insertOne({
            title,
            content,
            name,
            ppp,
            images,
            vdos
        });

        res.json(post);
    } catch(e) {
        console.error(e);
        res.status(500).send(e.message);
    }
};
