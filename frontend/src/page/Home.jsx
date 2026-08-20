import { useState } from "react";

import AddNote from "../components/AddNote.jsx";
import Navigation from "../components/Navigation.jsx";
import ToDoButton from "../components/ToDoButton.jsx";
import ToDoItem from "../components/ToDoItem.jsx";
import EmptyTodo from "../components/EmptyTodo.jsx";

function Home() {
  const [isAddNoteOpen, setAddNoteOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  // add new note(Todo)
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setAddNoteOpen(false);
  };

  //  completed todo
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // delete Todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  //edit Todo
  const editTodo = (id, newTitle) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    );
  };

  // open edit
  const openEditTodo = (todo) => {
    setEditingTodo(todo)
    setAddNoteOpen(true)
  }

  return (
    <>
      <main
        className={`min-h-screen ${darkMode ? "bg-[#252525] text-white" : "bg-white text-black"}`}
      >
        <div className="mx-auto w-full max-w-2xl px-6 py-10">
          <h1 className="text-center text-2xl font-bold">TODO LIST</h1>

          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

          <div className="mt-8">
            {todos.length === 0 ? ( <EmptyTodo />) : (

            todos.map((todo) => (
              <ToDoItem
                key={todo.id}
                title={todo.title}
                completed={todo.completed}
                onToggle={() => toggleTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
                onEdit={() => openEditTodo(todo)}
              />
            ))
            )}
          </div>

          <ToDoButton onClick={() => {
            setEditingTodo(null);
            setAddNoteOpen(true)}
          } />

          <AddNote
            key={editingTodo ? editingTodo.id : "new-note"}
            isOpen={isAddNoteOpen}
            onCancel={() => {
              setAddNoteOpen(false)
              setEditingTodo(null)
            }}
            darkMode={darkMode}
            onApply={addTodo}
            editingTodo={editingTodo}
            onEdit={editTodo}
          />
        </div>
      </main>
    </>
  );
}

export default Home;
