import "./styles.css"
import { Todo } from "../../todo/index"

export const AllTodosPage = () => {
    const todos = [
        {
            text: "Walk my dog",
            date: "10/10/2021",
            color: "blue",
            isComplete: false,
        },
        {
            text: "asdasd",
            date: "10/10/2021",
            color: "blue",
            isComplete: false,
        },
        {
            text: "asdasdasd",
            date: "10/10/2021",
            color: "blue",
            isComplete: true,
        },
    ]
    
    return (
        <div className="todos-container">
            { todos.map((todo) => <Todo text={todo.text} date={todo.date} color={todo.color} isComplete={todo.isComplete}/>) }
        </div>
    )
}
