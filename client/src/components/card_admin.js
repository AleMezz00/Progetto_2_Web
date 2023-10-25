import { useState } from 'react';
import service from '../services/service';
import './card_admin.css'
import ModificaProdotto from './modifica';
import Admin from './admin'

function CardAdmin(props){

    const Elimina =()=>{
        console.log('eliminazione del prodotto')
        const requestBody = { 
            nome: props.item.nome
        } 
        console.log(requestBody)
        service.deleteElement(requestBody).then(alert(`il prodotto: ${props.item.nome} è stato eliminato`))
        
    }

    const Modifica=()=>{
        props.setModifica(false)
        const prodotto = { 
            id:props.item.id,
            nome: props.item.nome,
            descrizione: props.item.descrizione,
            prezzo:props.item.prezzo
        } 
        console.log(prodotto)
        props.setProdotto(prodotto)
    }

       return(
        <div className="colonna">
            <div className="card_admin">
                <div className="card-body_admin">
                    <p className="id">{props.item.id}</p>
                    <h1 className="nome_prodotto">{props.item.nome}</h1> 
                    <p className="descrizione">{props.item.descrizione}</p>
                    <p className="prezzo">{props.item.prezzo}€</p>

                    <div className='BOTTONI'>
                        <button className="btn_modifica_prodotto" onClick={Modifica}>Modifica</button>
                        <button className="btn_elimina_prodotto" onClick={Elimina}>Elimina</button>
                    </div>

                </div>
            </div>
        </div>
     ); 
   
    
}

export default CardAdmin;