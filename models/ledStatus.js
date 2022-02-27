import mongoose from 'mongoose'
const { Schema } = mongoose

let LedStatusSchema = new Schema (
    {
        _id: Number,
        status: Boolean
    }
)

const LedStatus = mongoose.model("LedStatus", LedStatusSchema);

export { LedStatus }