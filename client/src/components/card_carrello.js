import './card_carrello.css'

function CardCarello(props){

    const Elimina =()=>{
        console.log('eliminazione del prodotto dalla lista')

        var lista= props.lista

        props.setOrdine(current => current.filter(lista => {
            return lista.nome != props.item.nome;
        }),
        );

        console.log(lista)
        var tot = props.totale -props.item.prezzo
        props.setTotale(tot)
        
    }
    return(
        <div className="colonna">
            <div className="card_carrello">
                <div className="card-body_carrello">
                    <h1 className="nome_prodotto_carrello">{props.item.nome}</h1> 
                    <p className="descrizione_carrello">{props.item.descrizione}</p>
                    <p className="prezzo_carrello">{props.item.prezzo}€</p>

                    <div className='BOTTONI_carrello'>
                        <button className="btn_rimuovi_prodotto_carrello" onClick={Elimina}>Rimuovi</button>
                    </div>

                </div>
            </div>
        </div>
    ); 
}

export default CardCarello;