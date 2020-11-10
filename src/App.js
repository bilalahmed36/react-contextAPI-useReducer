import React from 'react';
import Child2 from "./Child2";
import './App.css';

function App() {
  // let countState = useState(0);
  // let [state, setState] = useState({
  //   count: 1,
  //   onUpdate: () => {
  //     setState(({count, onUpdate}) =>{
  //       return {
  //         count: count + 1, onUpdate: onUpdate };
  //    });
  //   },
  //   });
  return( 
  //   <CounterContext.Provider value={state}>
     <div>
      <Child2 />
     </div>
  // </CounterContext.Provider>
   );



}

export default App;
