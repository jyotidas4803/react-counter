import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <main className="container">
      <Counter start={10} danger />
      <Counter step={12} />
      <Counter start="50" step={10} />
    </main>
  );
}

export default App;