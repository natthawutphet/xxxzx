import clientPromise from '../../lib/mongodb'
import { ObjectId } from "mongodb"


export default async (req, res) => {
    try {

        const client = await clientPromise;
        const db = client.db("admin");
        const { id } = req.query;

        const post = await db.collection("admin").deleteOne({
            _id: ObjectId(id)
        })

        res.json(post);

    } catch(e) {
        console.error(e);
        throw new Error(e).message;
    }
}