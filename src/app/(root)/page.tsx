import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'

function Home() {
    return (
        <>
            <h1>Todo App</h1>
            <AddTodoForm />
            <TodoList />
        </>
    )
}

export default Home
