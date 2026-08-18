import { useState } from "react";

import AddNote from "../components/AddNote";
import Navigation from "../components/Navigation";
import ToDoButton from "../components/ToDoButton";
import ToDoItem from "../components/ToDoItem";

function Home() {

  const [isAddNoteOpen, setAddNoteOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <main className={`min-h-screen ${darkMode ? "bg-[#252525] text-white" : "bg-white text-black"}`}>
      <div className="mx-auto w-full max-w-2xl px-6 py-10">
        <h1 className="text-center text-2xl font-bold">TODO LIST</h1>

        <Navigation darkMode={darkMode} setDarkMode={setDarkMode}/>

        <div className="mt-8">
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
        </div>

        <ToDoButton onClick={() => setAddNoteOpen(true)}/>

        <AddNote isOpen={isAddNoteOpen} onCancel={() => setAddNoteOpen(false)} darkMode={darkMode}/>
      </div>
    </main>
    </>
  );
}

export default Home;