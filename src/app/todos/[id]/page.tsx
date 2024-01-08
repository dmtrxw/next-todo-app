interface Props {
    params: {
        id: string
    }
}

function TodoDetail({ params }: Props) {
    return (
        <>
            <h1>Todo Detail</h1>
            <p>Showing todo with ID: {params.id}</p>

            <p>
                <strong>Title</strong>:
            </p>
            <p>...</p>
            <p>
                <strong>Description</strong>:
            </p>
            <p>...</p>
        </>
    )
}

export default TodoDetail
