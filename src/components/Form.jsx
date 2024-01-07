'use client'
import { addData } from "@/libs/Data"
import { useState } from "react"


const Form = () => {

    const [newCard, setNewCard] = useState({
        title: '',
        description: '',
        isComplete: false
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewCard(prevCard => ({ ...prevCard, [name]: value }))
    }

    const handleAdd = async (e) => {
        e.preventDefault()
        try {
            addData(newCard)
            setNewCard({ title: '', description: '', isComplete: false })
        } catch (error) {
            throw new Error(error);
        }
    }

    return (
        <form onSubmit={handleAdd} className='flex flex-col md:flex-row gap-4 justify-center items-center'>
            <input className='w-full border-2 border-[#e1e5e8] rounded px-4 py-2 flex-1 focus:outline-slate-600' type="text" placeholder='Enter Title' name="title" required value={newCard.title} onChange={handleChange} />
            <input className='w-full border-2 border-[#e1e5e8] rounded px-4 py-2 flex-1 focus:outline-slate-600' type="text" placeholder='Enter Description' name="description" required value={newCard.description} onChange={handleChange} />
            <button type='submit' className='bg-blue-800 text-white px-4 py-2 rounded-lg flex-3 focus:outline-yellow-600'>Add</button>
        </form>
    )
}

export default Form