Run Locally
To run this project on your local system:

# Clone the repository
git clone https://github.com/V939271/TDD-TODO.git
cd TDD-TODO

# Install dependencies
npm install

# Start the development server
npm start

# Run test cases (Jest + React Testing Library)
npm test

# Build for production
npm run build


Application Architecture

This project is built with React, using Hooks, Context API, and Test-Driven Development (TDD) with Jest + React Testing Library.

src/
 ├─ components/
 │   ├─ TaskInput.jsx       # Input field + button for adding tasks
 │   ├─ TaskItem.jsx        # Represents a single task with toggle/remove
 │   ├─ TaskList.jsx        # Displays all tasks or "No tasks" message
 │   └─ *.test.jsx          # Unit tests for each component
 │
 ├─ hooks/
 │   ├─ useTodos.js         # Custom hook for todos (add/toggle/remove)
 │   └─ useTodos.test.js    # Tests for the custom hook
 │
 ├─ context/
 │   └─ TodosContext.js     # Context + Provider for global state (scalable)
 │
 ├─ App.js                  # Main component (uses TaskInput + TaskList)
 ├─ App.test.js             # App-level tests
 ├─ index.js                # Application entry point
 ├─ setupTests.js           # Jest + React Testing Library setup


Flow:

App uses useTodos (custom hook) for managing todos.

TaskInput allows adding tasks.

TaskList renders tasks using TaskItem.

TodosContext can provide todos globally if scaling is needed.


React Hooks & Context API:

🔹 Hooks

useState → stores todos array

useCallback → memoizes add/toggle/remove functions

useTodos (custom hook) → encapsulates todos logic

🔹 Context API

TodosContext created with React.createContext()

TodosProvider wraps the app and shares todos + actions

Components consume context with useContext(TodosContext)

Removes the need for prop drilling and makes the app scalable

Features

 Add tasks with a button or Enter key

 Toggle completion (strike-through completed tasks)

 Remove tasks from the list

 Show “No tasks” when the list is empty

 Tested with Jest + React Testing Library (components + hook)

 Reusable and modular components

 Ready for deployment (Netlify/Vercel)