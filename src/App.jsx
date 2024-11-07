// import Counter from "./Counter";

// function App() {
//   return (
//     <main className="grid place-items-center min-h-screen bg-slate-100">
//       <div>
//         <Counter />
//       </div>
//     </main>
//   );
// }

// export default App;


import React from 'react'
import Counter from './Counter'

function App() {
  return (
    <main className="container">
      <Counter start={10} />
      <Counter />
      <Counter start="50" step="20" danger />
    </main>
  )
}

export default App