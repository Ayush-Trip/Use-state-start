import React, { useState } from 'react';


const App= () =>{
    const state = useState();
console.log(state);

let count=1;

const IncNum =() =>{

    console.log('clicked ' + count++);

}; 

    return (
        <>
            <h1 className='heading_style'> {count} </h1>
            <button onClick={IncNum}>Click Me</button>
        </>
    );
};

export default App;