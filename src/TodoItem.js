import './TodoItem.css'
function TodoItem(props){
    return(
      <li className='todo'>
        <span className={`fa-regular fa-circle-check fa-lg icons check ${props.completed?"inactive":"check"}`} onClick={(event)=>{
          console.log('Quieres completar un todo');
        }}></span>
        <span className={`fa-solid fa-circle-check fa-lg icons ${props.completed?"checked":"inactive"}`} style={{color: '#0268ee'}} onClick={(event)=>{
          console.log('Quieres descompletar un todo');
        }}></span>
        <p className={`${props.completed?"task--completed":"task"}`}>{props.text}</p>
        <span className="fa-regular fa-circle-xmark fa-lg icons close" onClick={(event)=>{
          console.log('Quieres eliminar un todo');
        }}></span>
      </li>
    )
}
export  {TodoItem}