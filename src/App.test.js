import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('adds, toggles, and removes tasks through the UI', async () => {
const user = userEvent.setup();
render(<App />);

const input = screen.getByPlaceholderText(/add a task/i);
const addBtn = screen.getByRole('button', { name: /add/i });

await user.type(input, 'First');
await user.click(addBtn);

const item = screen.getByText('First').closest('li');
expect(item).toBeInTheDocument();

const checkbox = within(item).getByRole('checkbox');
await user.click(checkbox);
expect(checkbox).toBeChecked();

const removeBtn = within(item).getByRole('button', { name: /remove/i });
await user.click(removeBtn);
expect(screen.queryByText('First')).not.toBeInTheDocument();
});