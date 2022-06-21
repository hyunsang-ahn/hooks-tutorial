import React, { useState } from 'react';
// import Counter from './Components/Counter'
// import Info from './Components/Info'
import Average from './Components/Average'

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <Average />
    // <div>
    //   <button onClick={() => { setVisible(!visible) }} >{visible ? '숨기기' : '보이기'}</button>
    //   <hr />
    //   {visible && <Info />}
    // </div>
  );
}

export default App;
