'use client'
import { useState } from "react";
import { TodoObject } from "./models/Todo";
import {v4 as uuid} from 'uuid'
import { FaGithub } from "react-icons/fa";


const Home: React.FC =() => {
  const [todo, setTodo]= useState<string>('')
  const [todos,setTodos]= useState<TodoObject[]>([])
  
  const addTodo = () =>{
    setTodos([{id: uuid(), value:todo,done:false},...todos])
    setTodo("");
  }

  const markTodoDone = (id :string) =>{
    setTodos(todos.map(todo => todo.id ===id ? {...todo, done:!todo.done}:todo));
  }

  return (
    <>
    <div className="flex justify-between bg-[#6fddfb]">
      <header className=" p-4">
        <h1 className="text-3xl font-bold">Todos</h1>
      </header>
      <a href="https://github.com/AsadAbbas78" className="p-4 text-2xl">

      <FaGithub />
      </a>
      </div>
      <main className="p-4">

        <input 
          type="text"
          placeholder="Add Todo"
          className="p-2 rounded mr-5 text-black"
          onChange={(e)=> setTodo (e.target.value)}
          value={todo}
        />
        <button className=" p-2 rounded bg-[#6fddfb] border-2 border-[#6fddfb] hover:bg-transparent hover:text-[#6fddfb]" onClick={() => addTodo()}>Add Todo</button>
        
        <ul className="mt-5">
          { 
            todos.map( todo =>(
              <li 
                key={todo.id}
                onClick={() => markTodoDone(todo.id)}
                className="text-3xl .ml-2 cursor-pointer text-white"> 
                {todo.value}
              </li>
            ))
          }
        </ul>
      </main>
    </>
  );
}

export default Home;