function AddTodoForm() {
    return (
        <form action="">
            <input
                type="text"
                placeholder="Title"
                autoComplete="off"
                style={{ marginRight: '1rem' }}
            />
            <input
                type="text"
                placeholder="Description"
                autoComplete="off"
                style={{ marginRight: '1rem' }}
            />
            <button type="submit">Add new todo</button>
        </form>
    )
}

export default AddTodoForm
