import React from 'react'

function Counter() {
let counter =0;

const handleClick=()=>{
    counter += 1;
    console.log(counter);
};

  return (
    <div className='flex gap-2 text-5xl item-center justify-center border-4 p-5'>
        <button className='p-2 rounded flex bg-blue-300' onClick={handleClick}>-</button>
        <p>{counter}</p>
        <button className='p-2 rounded flex bg-blue-300' onClick={handleClick}>+</button>
    </div>
  )
}

export default Counter