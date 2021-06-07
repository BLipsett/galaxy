import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Planet = new Schema({
  name: { type: String, required: true },
  starId: { type: Schema.Types.ObjectId, ref: 'Star', required: true }
},
{ timeStamps: true, toJSON: { virtuals: true } })

export default Planet
