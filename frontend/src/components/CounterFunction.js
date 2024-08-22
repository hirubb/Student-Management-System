import React, {useState} from 'react';


function Counterfunction(){

    let [Number,setNumber] = useState(0);  //react hooks

    function increment(){
        setNumber(Number = Number +10);
    }
    return(
        <div>
            <hr></hr>
            <h2>Functional component</h2>
            <h3>Counter = {Number}  </h3>
            <button onClick={e => increment()}>increment</button> 

        </div>
        //e = event
    )
    
}

export default Counterfunction;