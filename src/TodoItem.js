import './TodoItem.css'
function TodoItem(props){
    return(
      <li className='todo'>
        <span className="fa-regular fa-circle-check fa-lg icons check "></span>
        <span className="fa-solid fa-circle-check fa-lg icons checked inactive" style={{color: '#0268ee'}}></span>
        <p className='task'>{props.text}</p>
        <span className="fa-regular fa-circle-xmark fa-lg icons close"></span>
      </li>
    )
}
export  {TodoItem}