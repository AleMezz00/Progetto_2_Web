import './card_cliente.css'

function CardCliente(props){

    const creaOrdine = ()=> {
        props.setOrdine([...props.ordine,props.item]);
        var tot= props.totale + props.item.prezzo
        props.setTotale(tot)
        props.setNumero(props.numero +1)
    }

    return(
        <div className="colonna">
            <div className="card_cliente">
                <div className="card-body_cliente">
                    <h1 className="nome_prodotto">{props.item.nome}</h1>
                    <p className="descrizione">{props.item.descrizione}</p>
                    <p className="prezzo">{props.item.prezzo} €</p>
                    <button className="btn_aggiungi_prodotto_cliente" onClick={creaOrdine}>Aggiungi</button>
                </div>
            </div>
        </div>
    );
}

export default CardCliente;