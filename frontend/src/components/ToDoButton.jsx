import { FiPlus } from "react-icons/fi";

function ToDoButton({ onClick }) {
  return (
    <>
      <button
        className="bg-[#6C63FF] rounded-full p-3 text-white fixed bottom-10 right-[50%] cursor-pointer"
        onClick={onClick}
      >
        <FiPlus size={20} />
      </button>
    </>
  );
}

export default ToDoButton;
