import { useRef } from "react";

import useAddTodo from "./hooks/useAddTodo";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

  return (
    <>
      {addTodo.error && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-300 dark:text-red-800"
          role="alert"
        >
          <span className="font-medium">{addTodo.error.message}</span>
        </div>
      )}

      <form
        className="max-w-lg mx-auto"
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium dark:text-black"></label>
          <div className="flex gap-2">
            <input
              ref={ref}
              type="text"
              id="input"
              className="flex-1 bg-gray-50 border text-sm rounded-lg p-2.5  dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
            <button
              type="submit"
              className="text-white bg-pink-400 hover:bg-pink-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
