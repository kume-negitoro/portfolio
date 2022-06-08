import React from 'react'
import { useInView } from 'react-intersection-observer'

interface FadeInProps {
    children: JSX.Element
    duration: number
}

export const FadeIn = (props: FadeInProps) => {
    const { children, duration } = props

    const { ref, inView } = useInView()

    return (
        <div
            ref={ref}
            className={`p-5 ${
                inView
                    ? `opacity-100 transition-opacity duration-${duration} ease-in`
                    : `opacity-0`
            }`}
        >
            {children}
        </div>
    )
}
