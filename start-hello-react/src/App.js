import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react'; 

function App() {
  const name = `리엑트`;
  let name2 = undefined
  return (
    <Fragment>

      {Object.is(`리엑트`,name) ? (<h1>{name}</h1>) : (<h2>아니다</h2>)}
      {name2 || "잇힝"}
    </Fragment>
   
  );
  
}

export default App;
