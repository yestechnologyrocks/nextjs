import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

const Users = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");
        const movies = await db
            .collection("users")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
        res.json(movies);
    } catch (e) {
        console.error(e);
    }
}
export default Users