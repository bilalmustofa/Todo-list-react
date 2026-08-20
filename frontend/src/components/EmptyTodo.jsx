import emptyImg from '../assets/images/emptyTodo.png'

function EmptyTodo() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img
        src={emptyImg}
        alt="No tasks"
        className="w-40"
      />

      <h2 className="mt-6 text-lg font-bold">
        EMPTY...
      </h2>

      <p className="mt-2 text-sm text-gray-400">
        You don't have any tasks yet.
      </p>
    </div>
  );
}

export default EmptyTodo;