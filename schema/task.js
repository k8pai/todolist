import mongoose, { Schema } from 'mongoose'

const taskSchema = new Schema(
    {
        groupId: {
            type: Schema.Types.ObjectId,
            ref: 'List', // Reference to Group collection
        },
        name: String,
        status: Boolean,
    },
    { timestamps: true }
)

export const Task = mongoose.models.Task || mongoose.model('Task', taskSchema)
export default Task
