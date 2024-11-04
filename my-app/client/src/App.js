import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [time, setTime] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message));

    const timer = setInterval(() => {
      fetch('/api/time')
        .then(res => res.json())
        .then(data => setTime(data.time));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <h1>Multi-stage Docker Demo</h1>
      <p>Message from server: {message}</p>
      <p>Current server time: {time}</p>
    </div>
  );
}

export default App;