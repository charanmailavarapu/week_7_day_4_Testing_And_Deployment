import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskList from './TaskList';

test('renders items and handles toggle/remove', async () => {
  const user = userEvent.setup();
  const items = [
    { id: 'a', title: 'A', completed: false },
    { id: 'b', title: 'B', completed: true },
  ];
  const onToggle = jest.fn();
  const onRemove = jest.fn();
  render(<TaskList items={items} onToggle={onToggle} onRemove={onRemove} />);

  expect(screen.getByText('A')).toBeInTheDocument();
  expect(screen.getByText('B')).toBeInTheDocument();

  const checkboxes = screen.getAllByRole('checkbox');
  await user.click(checkboxes[0]);   // click first checkbox
  expect(onToggle).toHaveBeenCalledWith('a');

  const removeButtons = screen.getAllByRole('button', { name: /remove/i });
  await user.click(removeButtons[1]);   // click second remove
  expect(onRemove).toHaveBeenCalledWith('b');
});

test('shows emptyText when no items', () => {
  render(<TaskList items={[]} onToggle={() => {}} onRemove={() => {}} emptyText="No tasks" />);
  expect(screen.getByText('No tasks')).toBeInTheDocument();
});
