// export default function handler(req, res) {
// 	const { body: data } = req;
// 	console.log('req = ', req.body);
// 	console.log('data = ', data);
// 	res.status(200).json({ status: 'ok', data: data });
// }

import { connectDB } from '../../lib/mongoose'
import List from '../../schema/list'

export default async function handler(req, res) {
    await connectDB()

    if (req.method === 'POST') {
        console.log('this is a POST request')
        const { gid, name } = req.body
        console.log('gid = ', gid, name)
        await List.create({ gid, name })
        let data = await List.find({ gid: gid })

        return res.status(200).json({
            status: 200,
            ok: true,
            message: 'success',
            data,
        })
    }
    if (req.method === 'GET') {
        console.log('this is a GET request')
        let data = await List.aggregate([
            {
                $match: {},
            },
            {
                $lookup: {
                    from: 'tasks',
                    localField: '_id',
                    foreignField: 'groupId',
                    as: 'tasks',
                },
            },
        ])
        console.log('data => ', data)
        return res.status(200).json({
            status: 200,
            ok: true,
            data,
        })
    }

    if (req.method === 'DELETE') {
        const { id } = req.body
        console.log('this is a DELETE request')
        console.log('id = ', id)
        let data = await List.deleteOne({ _id: id })
        console.log('data from delete: ', data)
        return res.status(200).json(data)
    }

    res.status(200).json({ message: 'Hello from Next.js!' })
}
