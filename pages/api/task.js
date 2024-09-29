// export default function handler(req, res) {
// 	const { body: data } = req;
// 	console.log('req = ', req.body);
// 	console.log('data = ', data);
// 	res.status(200).json({ status: 'ok', data: data });
// }

import mongoose from 'mongoose'
import { connectDB } from '../../lib/mongoose'
import Task from '../../schema/task'

export default async function handler(req, res) {
    await connectDB()

    if (req.method === 'POST') {
        console.log('this is a POST request')
        const { groupId, name, status } = req.body
        console.log('groupId = ', groupId, name)
        const Id = new mongoose.Types.ObjectId(groupId)
        const newTask = new Task({
            groupId: Id,
            name,
            status,
        })

        await newTask.save()
        let data = await Task.find({ groupId: Id })

        return res.status(200).json({
            status: 200,
            ok: true,
            message: 'success',
            data,
        })
    }
    if (req.method === 'GET') {
        console.log('this is a GET request')
        let data = await Task.find()
        console.log('data => ', data)
        return res.status(200).json({
            status: 200,
            ok: true,
            data,
        })
    }

    if (req.method === 'PUT') {
        const { id, status } = req.body
        console.log('this is a GET request')
        let data = await Task.findByIdAndUpdate(id, { status })
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
        let data = await Task.deleteOne({ _id: id })
        console.log('data from delete: ', data)
        return res.status(200).json(data)
    }

    res.status(200).json({ message: 'Hello from Next.js!' })
}
