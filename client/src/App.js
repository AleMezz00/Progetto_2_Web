import './App.css';
import React,{useReducer, useState} from 'react'
import Login from './components/login';
import Menu from './components/menu';

function App() {

const [accedi, setAccedi] = useState(true)
const [visto, setVisto] = useState(true)

if(visto && accedi){

  return (
    <>
    <div className="App">
      <nav>
        <h1 className= "scritta_benvenuto">Benvenuto/a nel nostro sito!</h1>
        <ul>
          <li><button className="admin_btn" onClick={()=>setAccedi(false)}>Sei un amministratore?</button></li>
        </ul>
      </nav>

    <div className= "Container-principale">
      <h1>Puoi ordinare online consultando il nostro menu!</h1>
      <button className= "btn_visualizzaMenu" onClick={()=>setVisto(false)}>Visualizza Menu</button>
    </div>
      

    </div>
    <footer> Copyright 2022 by @Alessandro Mezzina / @Giovanna Camporeale </footer>
    </>
  );
}
else if(!visto){
  return(
    <Menu/>
  )
}
else if(!accedi){
  return(<Login/>)
}
}

export default App;
