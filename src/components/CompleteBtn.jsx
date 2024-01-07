'use client'
import { completeCard } from "@/libs/Data"
import { IoMdDoneAll } from "react-icons/io";


const CompleteBtn = ({ id }) => {

    const handleComplete = (id) => {
        completeCard(id);
    }

    return (
        <button className="bg-green-700 px-3 py-2 text-white rounded text-xl" onClick={() => handleComplete(id)} ><IoMdDoneAll /></button>
    )
}

export default CompleteBtn