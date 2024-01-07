import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        default: false
    }
})
mongoose.models = {}
export const Cards = mongoose.model.Cards || mongoose.model('Cards', todoSchema) 