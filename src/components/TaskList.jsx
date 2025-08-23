import TaskItem from './TaskItem';

export default function TaskList({ items = [], onToggle, onRemove, emptyText = 'No tasks' }) {
  if (!items.length) return <p>{emptyText}</p>;
  return (
    <ul>
      {items.map((t) => (
        <TaskItem key={t.id} task={t} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
}
