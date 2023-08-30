import { CreateTodo } from "../../UI/CreateTodo"

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