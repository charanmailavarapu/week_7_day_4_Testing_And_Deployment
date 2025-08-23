import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import useTodos from './hooks/useTodos';
import './App.css';

export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <main>
      <h1>To-Do</h1>
      <TaskInput onAdd={addTodo} />
      <TaskList items={todos} onToggle={toggleTodo} onRemove={removeTodo} />
    </main>
  );
}
