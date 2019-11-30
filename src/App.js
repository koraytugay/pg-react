import React, { useState } from 'react';
import Tweet from './Tweet.js'

export default function App() {
  
  // This is an example of using useState from React
  const [count, setCount] = useState(1);
  function increment() {
    setCount(count + 1);
  };

  // The following is called JSX
  return (
    <div>
      <h1>Hello</h1>
      <Tweet name="Koray Tugay" content="Hello!"/>
      <Tweet name="John Snow" content="Winter is coming"/>
      <Tweet name="John Doe"/>
      <p>
        <button onClick={increment}>Increment - {count}</button>
      </p>
    </div>
  );
}
