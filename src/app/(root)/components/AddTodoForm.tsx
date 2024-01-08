import { revalidatePath } from 'next/cache'

import SubmitButton from '@/components/SubmitButton'

function AddTodoForm() {
    // this function will be invoked on the server
    const handleFormSubmit = async (formData: FormData) => {
        'use server'
        const response = await fetch('http://localhost:4000/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: formData.get('title'),
                description: formData.get('description'),
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        revalidatePath('/')
    }

    return (
        <form action={handleFormSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                autoComplete="off"
                style={{ marginRight: '1rem' }}
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                autoComplete="off"
                style={{ marginRight: '1rem' }}
            />
            <SubmitButton>Add new todo</SubmitButton>
        </form>
    )
}

export default AddTodoForm
