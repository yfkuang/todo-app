import "./styles.css"
import { Todo } from "../../todo/index"

export const AllTodosPage = () => {
    return (
        <div>
            <Todo
                text="Walk my dog"
                date="10/10/2021"
                color="blue"></Todo>
        </div>
    )
}
