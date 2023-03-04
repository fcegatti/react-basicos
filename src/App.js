import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";
import Properties from './components/Properties';
import State from './components/State';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section >
          <MyComponent msg="Hola, soy un componente funcional desde una prop" />
          <hr></hr>
          <Properties 
          string="Esto es una cadena" 
          number={19} 
          boolean={true} 
          array ={[1,2,3]}
          object={{name:"federico", email:"federico@gmail.com"}}
          function={(num) => num*num}
          reactElement={<i>Esto es un elemento React</i>}
          component={<MyComponent msg="Soy un componente pasado como prop" />}
          />
          <hr/>
          <State/>
        </section>

      </header>
    </div>
  );
}

export default App;
