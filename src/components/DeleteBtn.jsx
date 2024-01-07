'use client'
import { deleteCard } from "@/libs/Data"
import { MdDelete } from "react-icons/md"


const DeleteBtn = ({ id }) => {

    const removeCard = (id) => {
        deleteCard(id)
    }

    return (
        <button className="bg-red-700 px-3 py-2 text-white rounded text-xl" onClick={() => removeCard(id)}><MdDelete /></button>
    )
}

export default DeleteBtn