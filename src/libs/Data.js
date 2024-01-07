'use server'
import { connectMongoDB } from "./connect";
import { Cards } from "./todoModel";
import { revalidatePath } from "next/cache";

export const fetchData = async () => {
    try {
        connectMongoDB()
        const todos = await Cards.find()
        if (!todos) {
            throw new Error("couldn't fetch the data")
        }
        return todos
    } catch (error) {
        console.log('error fetching data', error)
    }
}

export const addData = async (newCard) => {
    try {
        await connectMongoDB()
        const card = await Cards.create(newCard)
        revalidatePath('/');
        console.log('Card added successfully:', card);
    } catch (error) {
        throw new Error(error)
    }
}
export const deleteCard = async (id) => {
    try {
        await connectMongoDB()
        const card = await Cards.deleteOne({ _id: id })
        revalidatePath('/');
        console.log('Card deleted successfully:', card);
    } catch (error) {
        throw new Error(error)
    }
}

export const completeCard = async (id) => {
    try {
        await connectMongoDB()
        const currentCard = await Cards.findOne({ _id: id });
        const updatedIsComplete = !currentCard.isComplete;
        const card = await Cards.updateOne({ _id: id }, { $set: { isComplete: updatedIsComplete } });
        revalidatePath('/')
        console.log('Card edited successfully:', card);
    } catch (error) {
        throw new Error(error)
    }
}
