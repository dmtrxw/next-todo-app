import Link from 'next/link'
import TodoDeleteButton from './TodoDeleteButton'

function TodoList() {
    return (
        <ul>
            <li>
                dummy todo 1
                <br />
                <Link href={`/todos/${1}`}>
                    <button>See detail</button>
                </Link>
                &nbsp;
                <TodoDeleteButton id={1} />
            </li>
            <li>
                dummy todo 2
                <br />
                <Link href={`/todos/${2}`}>
                    <button>See detail</button>
                </Link>
                &nbsp;
                <TodoDeleteButton id={2} />
            </li>
        </ul>
    )
}

export default TodoList
