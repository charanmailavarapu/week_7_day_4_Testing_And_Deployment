import { renderHook, act } from '@testing-library/react';
import useTodos from './useTodos';

describe('useTodos', () => {
  test('adds a todo', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo('Learn TDD');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].title).toBe('Learn TDD');
    expect(result.current.todos[0].completed).toBe(false);
  });

  test('toggles a todo', () => {
    const { result } = renderHook(() => useTodos());
    
    act(() => {
      result.current.addTodo('Item');
    });
    // ✅ Read todos AFTER act
    const id = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(id);
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  test('removes a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Remove me');
    });
    // ✅ Read todos AFTER act
    const id = result.current.todos[0].id;

    act(() => {
      result.current.removeTodo(id);
    });

    expect(result.current.todos).toHaveLength(0);
  });
});
