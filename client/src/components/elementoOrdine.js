import './elementoOrdine.css'

function ElementoOrdine(props){
    return(
        <div  className="elemento-menu">
           {props.e}
        </div>
       
    )

}

export default ElementoOrdine;