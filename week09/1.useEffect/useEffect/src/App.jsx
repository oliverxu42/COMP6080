import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);

  console.log(count);

  // Runs whenever the count variable changes...
  useEffect(() => {
    setResult(count * 2);
  }, [count]);

  return (
    <>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>Result is {result}</p>
      <div>{/* <Pokemon /> */}</div>
    </>
  );
}

export default App;
