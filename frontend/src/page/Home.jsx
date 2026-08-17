import { useState } from "react";

import AddNote from "../components/AddNote";
import Navigation from "../components/Navigation";
import ToDoButton from "../components/ToDoButton";
import ToDoItem from "../components/ToDoItem";

function Home() {

  const [isAddNoteOpen, setAddNoteOpen] = useState(false);

  return (
    <>
      <div className="mx-auto w-full max-w-2xl px-6 py-10">
        <h1 className="text-center text-2xl font-bold">TODO LIST</h1>

        <Navigation />

        <div className="mt-8">
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
        </div>

        <ToDoButton onClick={() => setAddNoteOpen(true)}/>

        <AddNote isOpen={isAddNoteOpen} onCancel={() => setAddNoteOpen(false)}/>
      </div>
    </>
  );
}

export default Home;