import { useState } from 'react';
import './App.css';
import { Button, Logo, Text } from '@coachhubio/nova';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Logo />
      <Text type="heading" size="l">
        Nova Design System
      </Text>
      <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
      <p>
        Edit <code>src/App.tsx</code> to make changes.
      </p>
    </div>
  );
}

export default App;
