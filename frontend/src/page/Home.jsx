import Navigation from "../components/Navigation";
import ToDoItem from "../components/ToDoItem";

function Home() {
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
      </div>
    </>
  );
}

export default Home;