import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {

  console.log('APP 시작 !!!!!!!!');
  const number = 1234
  const name = `${number} Study`;

  return (

    <Fragment className="App">
      <header className="App-header">

        <p>React Test</p>
           {name === `1234김성수` ? (<h1>왓더 뻑</h1>) : (<h2>로카</h2>)}
            작동해라
        <img src={logo} className="App-logo" alt="logo" />

      </header>

    </Fragment>
  );
}

export default App;
