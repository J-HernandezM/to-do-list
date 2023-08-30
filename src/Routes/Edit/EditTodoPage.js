import { useParams } from "react-router-dom"
import { CreateTodo } from "../../UI/CreateTodo"

function EditTodoPage() {
    const { slug:id } = useParams()

    return(
        <div className="newTodo">
            <CreateTodo               
                title = {'Modifica un to-do'}
                action = {'edit'}
                currentID = {id}
            />
        </div>
    )
}

export { EditTodoPage }