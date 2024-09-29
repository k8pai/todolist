import mongoose, { Schema } from 'mongoose'

const listSchema = new Schema({ name: String }, { timestamps: true })

export const List = mongoose.models.List || mongoose.model('List', listSchema)
export default List
