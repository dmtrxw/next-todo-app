'use client'

import { useFormStatus } from 'react-dom'

function SubmitButton({ children }: React.PropsWithChildren) {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            style={{ opacity: !pending ? 1 : 0.5 }}>
            {!pending ? children : '...'}
        </button>
    )
}

export default SubmitButton
