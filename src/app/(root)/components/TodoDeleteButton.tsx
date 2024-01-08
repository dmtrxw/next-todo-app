'use client'

interface Props {
    id: number
}

function TodoDeleteButton({ id }: Props) {
    const handleDelete = (id: number) => {
        console.log('Delete a todo with id:', id)
    }

    return <button onClick={() => handleDelete(id)}>Delete</button>
}

export default TodoDeleteButton
