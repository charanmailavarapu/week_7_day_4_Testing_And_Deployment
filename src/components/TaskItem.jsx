export default function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li>
      <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        {task.title}
      </label>
      <button onClick={() => onRemove(task.id)}>Remove</button>
    </li>
  );
}
