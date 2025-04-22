import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const TodoList = () => {
  const fetchTodo = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  const{data: todos} = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo,
  });

    return <div>
      
        <ul>
            {todos?.map((todo) => (
                <li key={todo.id}>{ todo.title }</li>
            ))}
        </ul>
        
  </div>
};

export default TodoList;
