
function AddNote({ isOpen, onCancel }) {

    if(!isOpen) {
        return null;
    }

  return (
    <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="w-full max-w-md bg-white rounded-lg p-6">
                <h1 className="text-xl font-black text-center">NEW NOTE</h1>

                <input type="text" placeholder="Input your Note..."
                       className="w-full rounded-sm border border-[#6C63FF] px-4 py-1 mt-5 text-sm outline-none"/>
                
                <div className="mt-5 flex flex-col-reverse gap-3 sm:mt-10 sm:flex-row sm:justify-between">
                    <button className="w-full sm:w-auto bg-[#6C63FF] text-white px-2 py-1 rounded-sm cursor-pointer"
                    onClick={onCancel}>Cancel</button>
                    <button className="w-full sm:w-auto bg-[#6C63FF] text-white px-2 py-1 rounded-sm cursor-pointer">Apply</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddNote;