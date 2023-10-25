import { useState,useEffect } from 'react';
import Admin from './admin';
import './transazioni.css'
import CardTransazione from './card_transazione';

function Transazioni(){

    const [pagPrec, setPagPrec] = useState(true)
    const [transazione, setTrasazione]= useState([])

    

    useEffect(()=>{
      fetch('http://localhost:9000/ordine')
      .then(res=>res.json())
      .then(res=>setTrasazione(res))
    },[])

    if(pagPrec){
        return (

      <div className="sfondo_transazioni"> 

        <div className="scroll_transazioni">

         <nav>
            <h1 className= "scritta_transazioni">Transazioni</h1>
            <ul>
              <li><button className="btn_torna_menu" onClick={()=>setPagPrec(false)}>Torna al Menù</button></li>
            </ul>
          </nav>

            <div className="contenitore_ordine">
            {transazione.map((item)=>{
    
                return(
                  <CardTransazione
                    key={item._id} 
                    item1={item.ordine}
                    item={item}                                    
                    />
                )
              })
            }
            </div>

        </div>  

          <footer className="footer_carrello"> Copyright 2022 by @Alessandro Mezzina / @Giovanna Camporeale </footer>

      </div>              
    );
    }else{
        return(
          <Admin/>   
        )
    }
}

export default Transazioni;