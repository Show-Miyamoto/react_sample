import { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const[count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello React with Bun</h1>
      <button onClick={() => setCount(count + 1)}>
        push botton : {count} count
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
