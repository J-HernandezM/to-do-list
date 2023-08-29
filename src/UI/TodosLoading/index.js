import './TodosLoading.css'
function TodosLoading(){
    return(
        <div className='todo--loading'>
            <span className='check--loading'></span>
            <span className='task--loading'></span>
            <span className='close--loading'></span>
        </div>
    )
}
export {TodosLoading}