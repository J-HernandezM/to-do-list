import { CreateTodo } from "../../UI/CreateTodo"
import { useTodo } from "../useTodo"

function NewTodoPage() {
    return(
        <div className="newTodo">
            <CreateTodo               
                title = {'Agrega un to-do'}
                action = {'add'}
            />
        </div>
    )
}

export { NewTodoPage }