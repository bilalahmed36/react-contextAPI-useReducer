import React, {useReducer} from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {
    let [state, dispatch] = useReducer(counterReducer, 1)

    return(
        <div>
            <h3>Increament through useReducer</h3>
            <h3>Increament : {state}</h3>
            <button onClick={() => dispatch('INCREAMENT') }>Add Me</button>
        </div>
    )
}

export default Child2;