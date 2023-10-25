import { useState, useEffect } from 'react';
import './admin.css'
import AggiungiProdotto from './aggiungi_prodotto';
import CardAdmin from './card_admin';
import ModificaProdotto from './modifica';
import Transazioni from './transazioni';

function Admin(){
   
  const [visualizza, setVisualizza]= useState(true)
  const [modifica, setModifica]= useState(true)
  const [transazioni, setTransazioni]= useState(true)

  const [prodotto, setProdotto] = useState({})

  //get del menu

  const [data,setData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9000/visualizzaMenu')
    .then(res=>res.json())
    .then(res=>setData(res))
  },[])


  //rendering

  if(visualizza && modifica && transazioni){
    return(
      <div className="scroll">
        <div className="schermata_admin">
          <nav>
            <h1 className= "scritta_Menu">Menù</h1>
            <ul>
              <li><a className="scritta_logout" href='/'>Logout</a></li>
            </ul>
          </nav>

          <div className="Aggiungi">
            <button className="btn_aggiungi_prodotto_admin" onClick={()=> setVisualizza(false)}>Aggiungi Prodotto</button>

            <button className="btn_visualizza_transazioni" onClick={()=> setTransazioni(false)}>Visualizza Transazioni</button>
          </div>

          <div className="riga">

          {data.map((item)=>{
            return(
              <CardAdmin
              key={item._id} 
              item={item}
              setModifica={setModifica} 
              setProdotto={setProdotto}
              />
            )
           })}
           
           
          </div>

        </div>
  

    </div>

    );
  }else if(!visualizza){
    return(
      <AggiungiProdotto/>
    )
  }else if(!modifica){
    return(
     <ModificaProdotto prodotto={prodotto}/> 
    )
  }else if(!transazioni){
    return(
     <Transazioni/> 
    )
  }
    
}

export default Admin;