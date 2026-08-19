import { FiTrash2 } from "react-icons/fi";
import { VscEdit } from "react-icons/vsc";

function ToDoItem({ title, completed, onToggle, onDelete }) {
  return (
    <>
        <div className="flex items-center justify-between border-b border-b-[#6C63FF] py-4 mx-10">
            <div className="flex items-center gap-2 font-bold">
                <input type="checkbox" className="h-4 w-4 accent-[#6C63FF]" checked={completed} onChange={onToggle}/>
                <p className={`${completed ? "line-through text-gray-400" : ""}`}>{title}</p>
            </div>
            <div className="flex items-center justify-center gap-4 cursor-pointer">
                <FiTrash2 className="hover:text-[red]" onClick={onDelete}/>
                <VscEdit className="hover:text-[blue]"/>
            </div>
        </div>
    </>
  )
}

export default ToDoItem