import React from 'react'

export interface HistoryCardProps {
    experiences: {
        type: string
        date: string
        name: string
        desc: string
    }[]
}

const HistoryCard = (props: HistoryCardProps) => {
    const { experiences } = props
    return (
        <div className="p-5 rounded-lg drop-shadow-lg bg-white overflow-hidden">
            <table>
                {...experiences.map(({ type, date, name, desc }) => {
                    return (
                        <tr key={name}>
                            <th className="text-left">{date}</th>
                            <td className="pl-3">
                                <h3 className="font-medium">{name}</h3>
                                <p>
                                    {'　'}
                                    {desc}
                                </p>
                                <hr />
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default HistoryCard
