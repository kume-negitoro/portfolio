import React from 'react'
import ReactMarkdown from 'react-markdown'

export interface ProductCardProps {
    title: string
    type: string
    content: string
    url: string
    description: string
    devTerm: string
    devMembers: string
    devLanguages: string
    devLibraries: string
    ownJob: string
    urls: string[]
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    image: any
}

const ProductCard = (props: ProductCardProps) => {
    const {
        title,
        type,
        content,
        devTerm,
        devMembers,
        devLanguages,
        devLibraries,
        ownJob,
        urls,
    } = props
    return (
        <div className="p-5 rounded-lg drop-shadow-lg bg-white overflow-hidden">
            <p className="text-center font-semibold text-xl p-2">
                {title} ({type})
            </p>
            <div className="p-5">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            <table>
                <tr>
                    <th>開発期間</th>
                    <td>{devTerm}</td>
                </tr>
                <tr>
                    <th>開発人数</th>
                    <td>{devMembers}</td>
                </tr>
                <tr>
                    <th>使用言語</th>
                    <td>{devLanguages}</td>
                </tr>
                <tr>
                    <th>使用ライブラリ</th>
                    <td>{devLibraries}</td>
                </tr>
                <tr>
                    <th>役割</th>
                    <td>{ownJob}</td>
                </tr>
                <tr>
                    <th>参考URL</th>
                    <td>
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
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default ProductCard
