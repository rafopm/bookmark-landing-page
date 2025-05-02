'use client'

import { useState, useEffect } from 'react'

export default function useBaseUrl() {
    const [baseUrl, setBaseUrl] = useState('')
    
    useEffect(() => {
        if (window.location.origin === 'https://rafopm.github.io') {
            setBaseUrl('https://rafopm.github.io/room-homepage')
        } else {
            setBaseUrl(window.location.origin)
        }
    }, [])

    return baseUrl
}