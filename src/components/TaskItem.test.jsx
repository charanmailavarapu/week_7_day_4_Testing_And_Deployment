import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskItem from './TaskItem';

const task = { id: '1', title: 'Buy milk', completed: false };

test('toggles completion via checkbox', async () => {
  const onToggle = jest.fn();
  render(<TaskItem task={task} onToggle={onToggle} onRemove={() => {}} />);
  await userEvent.click(screen.getByRole('checkbox'));
  expect(onToggle).toHaveBeenCalledWith('1');
});

test('removes task via button', async () => {
  const onRemove = jest.fn();
  render(<TaskItem task={task} onToggle={() => {}} onRemove={onRemove} />);
  await userEvent.click(screen.getByRole('button', { name: /remove/i }));
  expect(onRemove).toHaveBeenCalledWith('1');
});
