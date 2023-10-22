import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Container, SSRProvider} from "@/components/bootstrap";
import NavBar from "@/app/NavBar";

const inter = Inter({subsets: ['latin']})
export const metadata: Metadata = {
    title: 'Creating Next App',
    description: 'This is the nestJS Application',
}
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <SSRProvider>
            <NavBar/>
            <main>
                <Container className="py-4">
                    {children}
                </Container>
            </main>
        </SSRProvider>
        </body>
        </html>
    )
}