// import React, { useState } from "react";

// function Counter() {
//   const [stateValue, func] = useState(10);

//   const handleClick = () => {
//     func(100);
//   };

//   return (
//     <div className="flex gap-4 text-5xl items-center justify-center border-4 p-3">
//       <button className="btn" onClick={handleClick}>
//         -
//       </button>
//       <p>{stateValue}</p>
//       <button className="btn" onClick={handleClick}>
//         +
//       </button>
//     </div>
//   );
// }

// export default Counter;


import React, { useState } from "react";

function Counter({start = 0 , step = 10, danger=false}) {

const [counter, updateCounter] = useState(+start);


const handleClick = (type) => {
    if(type==='minus'){
        updateCounter(counter-10);
        console.log('clicked-');
        return
    }
    updateCounter(counter+10);
    console.log('clicked+');
    
};



  return (
    <div className='flex items-center border-4 p-3 gap-4'>

        <button className={`btn ${danger?'red':''}`} onClick={()=>handleClick('minus')}>-</button>
        <p className='text-2xl font-bold'>{counter}</p>
        <button className={`btn ${danger?'red':''}`} onClick={()=>handleClick('plus')}>+</button>
    </div>
  )
}

export default Counter;