import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Simple Frontend App</h1>
        <p>A minimal React application</p>
      </header>

      <main className="App-main">
        <section className="card">
          <h2>Counter Demo</h2>
          <div className="counter">
            <button onClick={handleDecrement} className="btn btn-danger">
              −
            </button>
            <span className="count-display">{count}</span>
            <button onClick={handleIncrement} className="btn btn-success">
              +
            </button>
          </div>
          <button onClick={handleReset} className="btn btn-reset">
            Reset
          </button>
        </section>

        <section className="card">
          <h2>Greeting Section</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          {name && <p className="greeting">Hello, {name}! 👋</p>}
        </section>

        <section className="card">
          <h2>Features</h2>
          <ul>
            <li>✅ Simple and clean UI</li>
            <li>✅ Interactive counter component</li>
            <li>✅ State management with React Hooks</li>
            <li>✅ Fully containerized with Docker</li>
          </ul>
        </section>
      </main>

      <footer className="App-footer">
        <p>© 2026 Simple Frontend App. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
