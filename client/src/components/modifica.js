import { useState } from 'react';
import service from '../services/service';
import Admin from './admin';
import './modifica.css'

function ModificaProdotto(props){


    //per il rendering condizionale
    const [precedente, setPrecedente] = useState(true);
    const [principale, setPrincipale] = useState(true);

    //variabili

    const [nome, setNome]= useState(props.prodotto.nome)
    const [descrizione, setDescrizione]= useState(props.prodotto.descrizione)
    const [prezzo, setPrezzo]= useState(props.prodotto.prezzo)

   
    const ModificaProdotto = ()=>{
        setPrincipale(false)
        const prodottoModificato = { 
            id:props.prodotto.id,
            nome: nome,
            descrizione: descrizione,
            prezzo:prezzo
        }

        console.log(prodottoModificato)

        service.updateElement(prodottoModificato).then(alert(`il prodotto: ${nome} è stato Modificato`))
        
    }


    if (principale && precedente){
        return(
        <>
            <div className='Update'>
            <nav>
                <h1 className= "scritta_update_prodotto">Modifica il tuo prodotto!</h1>
                 <ul>
                    <li><button className="pagina_precedente" onClick={()=> setPrecedente(false)}>Torna alla pagina precedente</button></li>
                 </ul>
            </nav>

                <div className= "Sfondo">

                    <div className= "Container_principale">
                        <div className="form">
                            <form >

                                <div className='form-group'>
                                    <p> prodotto: {props.prodotto.id}</p>
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='NomeProdotto'> Nome Prodotto: </label>
                                    <input type='text'  onChange={(e)=>setNome(e.target.value)}
                                    name="NomeProdotto"  placeholder={props.prodotto.nome}/>
                                </div>

                                <div className='form-group-descrizione'>
                                    <label htmlFor='descrizione'> Descrizione: </label>
                                    <input type='text' onChange={(e)=>setDescrizione(e.target.value)}
                                    name="descrizione"  placeholder={props.prodotto.descrizione}/>
                                </div>

                                <div className='form-group-prezzo'>
                                    <label htmlFor='prezzo'> Prezzo: </label>
                                    <input type='text'onChange={(e)=>setPrezzo(e.target.value)}
                                    name="prezzo"  placeholder={props.prodotto.prezzo} />
                                </div>


                                <button type='submit' className='btn_update' onClick={ModificaProdotto}>Modifica Prodotto</button> 
                        
                            </form>

                        </div>

                    </div>
            
                </div>

        </div>

            <footer> Copyright 2022 by @Alessandro Mezzina / @Giovanna Camporeale </footer>
        </>
       
    );
    }else if(!precedente || !principale){
        return(
            <Admin/>
        )
    }
}

export default ModificaProdotto;