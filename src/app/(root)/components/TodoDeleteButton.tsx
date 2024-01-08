'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
    id: number
}

function TodoDeleteButton({ id }: Props) {
    const [isPending, setIsPending] = useState(false)
    const navigation = useRouter()

    const handleDelete = async (id: number) => {
        setIsPending(true)
        console.log('Delete a todo with id:', id)
        const response = await fetch(`http://localhost:4000/todos/${id}`, {
            method: 'DELETE',
        })
        if (!response.ok) {
            throw new Error('fetch error')
        }

        navigation.refresh()

        setIsPending(false)
    }

    return (
        <button
            disabled={isPending}
            style={{ opacity: !isPending ? 1 : 0.5 }}
            onClick={() => handleDelete(id)}>
            {!isPending ? 'Delete' : '...'}
        </button>
    )
}

export default TodoDeleteButton
