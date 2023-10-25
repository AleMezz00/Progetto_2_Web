import { useState } from 'react';
import './carrello.css'
import Menu from './menu';
import CardCarello from './card_carrello';
import service from '../services/service'

function Carrello(props){

    const [bottone, setBottone] = useState(true)
  

    const confermaOrdine = ()=>{

      const listaNome =[] 

      {props.ordine.map((item)=>{
        listaNome.push(item.nome)
      })}
      
      setBottone(false);
      const requestBody = { 
        ordine:listaNome,
        totale:props.totale
      } 

     console.log(requestBody)

      service.insertOrder(requestBody).then(console.log('ordine inserito correttamente')).then(window.alert('ordine confermato'))
      
    }
    
    if(bottone){
        return(

        <div className="sfondo_carrello"> 

        <div className="scroll_carrello">

        <nav>
            <h1 className= "scritta_Carrello">Carrello</h1>
            <ul>
              <li><button className="btn_torna_menu" onClick={()=>setBottone(false)}>Torna al Menù</button></li>
            </ul>
          </nav>


            <div className="contenitore_ordine">

              <div className="scritta_scendi">
                Clicca il tasto "Conferma ordine"a fine carrello per proseguire!
              </div>

              <div className="riga">
                 {props.ordine.map((item)=>{
                    return(
                       <CardCarello 
                        key={item._id} 
                        item={item}  
                        ordine={props.ordine}
                        setOrdine={props.setOrdine}
                        totale={props.totale}
                        setTotale= {props.setTotale}
                      />
                    )
                  })}
              </div>

              <div>
                <p className="scritta_totale">Totale: {props.totale}€</p>
              </div>

              <button className="btn_conferma_ordine" onClick={confermaOrdine}>Conferma ordine</button>

            </div>

        </div>

    </div>

    );
    }else{
        return(
          <Menu/>  
        )
    }
    
}

export default Carrello;