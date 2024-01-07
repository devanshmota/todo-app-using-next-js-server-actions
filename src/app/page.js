import CompleteBtn from "@/components/CompleteBtn"
import DeleteBtn from "@/components/DeleteBtn"
import Form from "@/components/Form"
import { deleteCard, fetchData } from "@/libs/Data"
import { IoMdDoneAll } from "react-icons/io"


export default async function Home() {

  let cards = await fetchData()
  let cardCount = cards.length

  return (
    <main className='w-3/5 mx-auto mt-8 flex flex-col gap-8'>
      <Form />
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-4">
        {
          cards.map((card, index) => {
            return (
              <div key={card._id.toString()} className={`w-full border-2 border-[#e1e5e8] rounded px-2 py-4 md:p-7 flex flex-col gap-3 text-center ${index === cardCount - 1 && cardCount % 2 !== 0 ? "basis-full" : "basis-[calc(50%-0.5rem)] break-words"}`}>
                <h1 className={`text-3xl font-bold ${card.isComplete === true ? 'line-through' : ''}`}>{card.title}</h1>
                <p className={`${card.isComplete === true ? 'line-through' : ''}`} >{card.description}</p>
                <div className="flex gap-2 justify-center basis">
                  <CompleteBtn id={card._id.toString()} />
                  <DeleteBtn id={card._id.toString()} />
                </div>
              </div>
            )
          })
        }
      </div>
    </main >
  )
}
