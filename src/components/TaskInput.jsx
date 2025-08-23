import { useState } from 'react';

export default function TaskInput({ onAdd, placeholder = 'Add a task', buttonText = 'Add' }) {
  const [value, setValue] = useState('');

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue('');
  };

  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
        aria-label="task-input"
      />
      <button onClick={submit}>{buttonText}</button>
    </div>
  );
}
