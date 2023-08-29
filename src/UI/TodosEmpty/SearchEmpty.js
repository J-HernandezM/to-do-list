import './TodosEmpty.css'
function SearchEmpty(props){
    return(
        <div className='emptyBox'>
            <p className='emptyText'>No hay resultados para: {props.search} </p>
        </div>
    )
}
export {SearchEmpty}