import React from 'react'

export interface SkillCardProps {
    title: string
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    icon: JSX.Element
    onClick?: () => void
}

const SkillCard = (props: SkillCardProps) => {
    const { title, icon, onClick } = props
    return (
        <div
            className="rounded-lg drop-shadow-lg bg-white hover:bg-sky-100 transition duration-300 ease-in-out overflow-hidden"
            onClick={onClick}
        >
            <div className="flex">
                <div className="flex-none w-16 h-16 bg-white">{icon}</div>
                <div className="w-64 pl-2 grid place-items-center">
                    <div className="flex-initial text-center text-xl">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillCard
