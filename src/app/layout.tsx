import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Todo App',
    description: 'Todo App created for demo purposes',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css"
                    type="text/css"
                />
            </head>
            <body>{children}</body>
        </html>
    )
}
