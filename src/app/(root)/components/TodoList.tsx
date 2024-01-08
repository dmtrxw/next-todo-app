import TodoDeleteButton from './TodoDeleteButton'

interface Todo {
    id: number
    title: string
    description: string
}

const fetchTodos = async () => {
    const response = await fetch('http://localhost:4000/todos', {
        cache: 'no-store',
    })
    const responseBody: Todo[] = await response.json()

    if (!response.ok) {
        throw new Error('fetch error')
    }

    return responseBody
}

async function TodoList() {
    const todos = await fetchTodos()
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} style={{ marginBottom: '2rem' }}>
                    {todo.title}
                    <br />
                    <span style={{ color: '#a0a0a0' }}>{todo.description}</span>
                    <br />
                    <TodoDeleteButton id={todo.id} />
                </li>
            ))}
        </ul>
    )
}

export default TodoList
