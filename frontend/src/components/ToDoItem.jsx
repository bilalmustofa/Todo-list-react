import { FiTrash2 } from "react-icons/fi";
import { VscEdit } from "react-icons/vsc";

function ToDoItem({ title, completed, onToggle, onDelete, onEdit }) {
  return (
    <>
        <div className="group flex items-center justify-between border-b border-b-[#6C63FF] py-4 mx-10">
            <div className="flex items-center gap-2 font-bold">
                <input type="checkbox" className="h-4 w-4 accent-[#6C63FF]" checked={completed} onChange={onToggle}/>
                <p className={`${completed ? "line-through text-gray-400" : ""}`}>{title}</p>
            </div>
            <div className="flex items-center gap-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <FiTrash2 className="cursor-pointer hover:text-red-500" onClick={onDelete}/>
                <VscEdit className="cursor-pointer hover:text-blue-500" onClick={onEdit}/>
            </div>
        </div>
    </>
  )
}

export default ToDoItem