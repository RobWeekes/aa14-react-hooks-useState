import { useState } from 'react';
import './UseState.css';

const UseState = () => {
  // console.log(useState('light'));
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <h2>Count: {count}</h2>
      {/* setCount(count + 1) works but not best practice */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      {/* best practice when using the value of the previous state to update the state */}
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }}>
        {/* this works \/ but trying it with ternary ^^ */}
        {/* if(theme === 'dark') {
            setTheme('light')
        } else setTheme('dark')}}> */}
        Toggle Theme
      </button>
    </div>
  );
};

export default UseState;
