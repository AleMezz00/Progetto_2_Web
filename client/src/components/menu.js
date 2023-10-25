import './menu.css'
import CardCliente from './card_cliente';
import { useEffect, useState } from 'react';
import Carrello from './carrello';

function Menu(){

  const [carrello, setCarrello] = useState(true);
  const [ordine, setOrdine] = useState(Array)
  const [data,setData] = useState([])
  const [totale, setTotale] = useState(0)
  const [numero, setNumero]= useState(0)

  useEffect(()=>{
    fetch('http://localhost:9000/visualizzaMenu')
    .then(res=>res.json())
    .then(res=>setData(res))
  },[])

  console.log(ordine)
  console.log(data)
  console.log(totale)
  

if(carrello){
    return(
      <div className="scroll">
        <div className="Menu">
          <nav>
            <h1 className= "scritta_Menu">Menù</h1>
            <ul>
              <li><a href='/'>Torna alla pagina principale</a></li>
            </ul>
          </nav>

          <div className="carrello">
            <div className="contenitore_numero">
            <p className='numero'>{numero}</p>
            </div>
            <button className="btn_carrello" onClick={()=> setCarrello(false)}>Carrello</button>
          </div>

          <div className="riga">
           {data.map((item)=>{
            return(
              <CardCliente 
                key={item._id} 
                item={item}  
                setOrdine={setOrdine}
                ordine={ordine}
                setTotale={setTotale}
                totale={totale}
                setNumero ={setNumero}
                numero={numero}
                />
            )
           })}
          </div>

          

        </div>
        
    </div>
    )
  }else {
    return(
      <Carrello ordine={ordine} setOrdine={setOrdine} totale={totale} setTotale={setTotale}/>
    )

  }
    
}

export default Menu;