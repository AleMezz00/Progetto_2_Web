import React, { useState } from 'react';
import Admin from './admin';
import './aggiungi_prodotto.css'
import service from '../services/service';

function AggiungiProdotto(){

    
    const [principale, setPrincipale] = useState(true)
    const [precedente, setPrecedente]= useState(true)

    const [id, setId]= useState('')
    const [nome, setNome]= useState('')
    const [descrizione, setDescrizione]= useState('')
    const [prezzo, setPrezzo]= useState('')

    const handleSubmit = (e)=>{
        try{
            e.preventDefault()
            const requestBody = { 
                id:id,
                nome: nome,
                descrizione: descrizione,
                prezzo:prezzo
            } 

            console.log(requestBody)
        
            service.getElemento(requestBody).then(console.log('elemento inserito correttamente'))
            setPrincipale(false)
        
        }catch(err){
            console.log('login non avvenuto')
        }
     
    }

    
    if( principale && precedente){
        return (
                <>
                    <div className='Add'>
                    <nav>
                        <h1 className= "scritta_add_prodotto">Aggiungi un nuovo prodotto!</h1>
                        <ul>
                        <li><button className="pagina_precedente" onClick={()=>setPrecedente(false)}>Torna alla pagina precedente</button></li>
                        </ul>
                    </nav>

                        <div className= "Sfondo">

                            <div className= "Container_principale">
                                <div className="form">
                                    <form onSubmit={e=>{handleSubmit(e)}} >

                                         <div className='form-group-nome'>
                                            <label htmlFor='IdProdotto'> Id: </label>
                                            <input type='text' required value={id} onChange={(e)=>setId(e.target.value)}
                                            name="IdProdotto"  placeholder='Id del Prodotto'/>
                                        </div>

                                        <div className='form-group-nome'>
                                            <label htmlFor='NomeProdotto'> Nome Prodotto: </label>
                                            <input type='text' required value={nome} onChange={(e)=>setNome(e.target.value)}
                                            name="nomeProdotto"  placeholder='Nome del Prodotto'/>
                                        </div>

                                        <div className='form-group-descrizione'>
                                            <label htmlFor='descrizione'> Descrizione: </label>
                                            <input type='text' required value={descrizione} onChange={(e)=>setDescrizione(e.target.value)}
                                            name="descrizione"  placeholder='Descrizione'/>
                                        </div>

                                        <div className='form-group-prezzo'>
                                            <label htmlFor='prezzo'> Prezzo: </label>
                                            <input type='text' required value={prezzo} onChange={(e)=>setPrezzo(e.target.value)}
                                            name="prezzo"  placeholder='Prezzo'/>
                                        </div>


                                        <button type='submit' className='btn_add_new'>Aggiungi prodotto</button> 
                                
                                    </form>

                                </div>

                            </div>
                    
                        </div>

                </div>

                    <footer> Copyright 2022 by @Alessandro Mezzina / @Giovanna Camporeale </footer>
                </>
        )
    }else if(!principale || !precedente){
        return(
           <Admin/> 
        )
    }
}

export default AggiungiProdotto;