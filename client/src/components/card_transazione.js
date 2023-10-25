import ElementoOrdine from "./elementoOrdine";
import './card_transazione.css'


function CardTransazione(props){

 
    return(
        <div className="colonna">
            <div className="card_transazione">
                <div className="card-body_transzione">

                    <p className="scritta_ordine" >Ordine :</p>
                    {props.item1.map((e=>{
                        return(
                            <ElementoOrdine
                            e={e}
                            key={e._id} 
                            />
                        )

                    }))
                    }
                    <div className="div_totale">
                    <p className="totale">Costo Totale: {props.item.totale}€ </p>
                    </div>

                </div>
            </div>
        </div>
    );
    
}

export default CardTransazione;