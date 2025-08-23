import { useCallback, useState } from 'react';

// Safe ID generator (works in browser + Jest/Node)
function genId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'id_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
}

export default function useTodos(initial = []) {
  const [todos, setTodos] = useState(initial);

  const addTodo = useCallback((title) => {
    const t = (title || '').trim();
    if (!t) return;
    setTodos((prev) => [
      ...prev,
      { id: genId(), title: t, completed: false },
    ]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return { todos, addTodo, toggleTodo, removeTodo };
}
