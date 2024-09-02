import Image from 'next/image'
import TodoList from './components/todoList'
import { Todo } from './types/todo';
import { GetServerSideProps } from 'next';

interface Props {
  initialTodos: Array<Todo>
}

export default async function Home({initialTodos}:Props) {
  
  return (
    <div>
      <TodoList/>
    </div>
  )
}

export const getServerSideProps : GetServerSideProps<{initialTodos:Array<Todo>}> = async () =>  {
  const res = await fetch('http://localhost:3000/api/todos');
  const todos:Array<Todo> = await res.json();

  return {
    props:{
      initialTodos: todos
    }
  }
} 
