import React from 'react'
import ReactMarkdown from 'react-markdown'

export interface AchievementCardProps {
    title: string
    date: string
    description: string
    urls: string[]
}

const AchievementCard = (props: AchievementCardProps) => {
    const { title, date, description, urls } = props
    return (
        <div className="p-3 rounded-lg drop-shadow-lg bg-white hover:bg-sky-100 transition duration-300 ease-in-out overflow-hidden">
            <div>
                <div className="w-128 pl-2 grid place-items-center">
                    <div>{date}</div>
                    <div className="flex-initial text-center text-xl">
                        {title}
                    </div>
                    <div className="p-5">
                        <ReactMarkdown>{description}</ReactMarkdown>
                    </div>
                    {urls?.length > 0 ? (
                        <ul>
                            {urls.map((url: string, i: number) => {
                                return (
                                    <li key={i}>
                                        <span>{`参考リンク${i + 1}: `}</span>
                                        <a
                                            href={url}
                                            className="text-blue-600 visited:text-purple-600"
                                        >
                                            {url}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AchievementCard
