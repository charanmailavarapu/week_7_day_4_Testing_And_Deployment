import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskInput from './TaskInput';

test('updates input value as user types', async () => {
  render(<TaskInput onAdd={() => {}} />);
  const input = screen.getByPlaceholderText(/add a task/i);
  await userEvent.type(input, 'Buy milk');
  expect(input).toHaveValue('Buy milk');
});

test('calls onAdd with trimmed text and clears input', async () => {
  const onAdd = jest.fn();
  render(<TaskInput onAdd={onAdd} />);
  const input = screen.getByPlaceholderText(/add a task/i);
  const button = screen.getByRole('button', { name: /add/i });

  await userEvent.type(input, '  Buy milk  ');
  await userEvent.click(button);

  expect(onAdd).toHaveBeenCalledWith('Buy milk');
  expect(input).toHaveValue('');
});
