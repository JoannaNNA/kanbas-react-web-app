import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ul className="list-group  w-100 ">
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <hr/>
    </div>
);}


//     <div>
//       <h2>Todo List</h2>
//       <ul className="list-group">
//         <li className="list-group-item">
//           <button onClick={() => addTodo(todo)}
//                   id="wd-add-todo-click">Add</button>
//           <button onClick={() => updateTodo(todo)}
//                   id="wd-update-todo-click">
//             Update </button>
//           <input defaultValue={todo.title}
//             onChange={(e) =>
//               setTodo({ ...todo,
//                 title: e.target.value })
//             }
//           />
//         </li>
//         {todos.map((todo) => (
//           <li key={todo.id} className="list-group-item">
//             <button onClick={() => deleteTodo(todo.id)}
//                     id="wd-delete-todo-click">
//               Delete </button>
//             <button onClick={() => setTodo(todo)}
//                     id="wd-set-todo-click">
//               Edit </button>
//             {todo.title}
//           </li>
//         ))}
//       </ul>
//       <hr/>
//     </div>
//   );
// }
