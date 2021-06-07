import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Star = new Schema({
  name: { type: String, required: true },
  galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true }
},
{ timeStamps: true, toJSON: { virtuals: true } })

export default Star
