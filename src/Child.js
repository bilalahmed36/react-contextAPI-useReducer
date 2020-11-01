import React, {useContext} from 'react';
import CounterContext from './CounterContext';


const Child = () =>{
    let CounterValue = useContext(CounterContext);
 
    return(
        <div>
            <h3>Increament through Context API</h3>
            <h3>Increament : {CounterValue[0]} </h3>
            <button onClick = {() => {CounterValue[1](++CounterValue[0])}}>Add Me</button>
        </div>
    )
}
export default Child;