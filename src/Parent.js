import React, {useContext} from 'react';
import CounterContext from './CounterContext';

const Parent = () => {
    const {state, onUpdate} = useContext(CounterContext);
    return(
        <div>
            <button onClick={onUpdate}>Add Me</button>
        </div>
    );
}
export default Parent;