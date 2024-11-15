'use client';
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function NotFound({ }: Props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <h1 style={{ fontSize: '2rem' }}>Page not found: 404</h1>
            <h2>This page does not exist</h2>
            <Link className="link" href="/" style={{ marginTop: '1rem' }}>Back to home</Link>
            <style global jsx>{`
                .link:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    )
}