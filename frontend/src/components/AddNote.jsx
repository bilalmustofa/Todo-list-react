import { useState } from "react";

function AddNote({ isOpen, onCancel, darkMode, onApply, editingTodo, onEdit }) {

  const [note, setNote] = useState(editingTodo ? editingTodo.title : "");

  if (!isOpen) {
    return null;
  }

  const handleApply = () => {
    if (note.trim() === "") {
      return;
    }

    if (editingTodo) {
      onEdit(editingTodo.id, note);
    } else {
      onApply(note);
    }

    setNote("");
    onCancel();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
        <div
          className={`w-full max-w-md rounded-lg p-6 ${darkMode ? "bg-[#252525] text-white" : "bg-white text-black"}`}
        >
          <h1 className="text-xl font-black text-center">
            {editingTodo ? "EDIT NOTE" : "NEW NOTE"}
          </h1>

          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Input your Note..."
            className={`w-full rounded-sm border border-[#6C63FF] px-4 py-1 mt-5 text-sm outline-none ${darkMode ? "bg-[#333333] text-white placeholder-gray-300" : "bg-white text-black placeholder-black"}`}
          />

          <div className="mt-5 flex flex-col-reverse gap-3 sm:mt-10 sm:flex-row sm:justify-between">
            <button
              className={`w-full sm:w-auto bg-[#6C63FF] px-2 py-1 rounded-sm cursor-pointer ${darkMode ? "bg-transparent text-[#6C63FF] border" : "bg-[#6C63FF] text-white"}`}
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="w-full sm:w-auto bg-[#6C63FF] text-white px-2 py-1 rounded-sm cursor-pointer"
              onClick={handleApply}
            >
              {editingTodo ? "Edit" : "Apply"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNote;
