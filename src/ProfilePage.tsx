import React from 'react'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Profile from './Profile'
import SkillCard from './SkillCard'
import ProductCard from './ProductCard'

import { list as skillList } from './skills'
import intro from './informations/introduction.md'
import poprop from './informations/poprop.md'
import shooting_x from './informations/shooting-x.md'
import demomoni from './informations/demomoni.md'

const popropData = matter(poprop)
const shooting_xData = matter(shooting_x)
const demomoniData = matter(demomoni)

const ProfilePage = () => {
    return (
        <>
            <Profile />
            <div className="flex">
                <div className="flex-initial basis-1/4"></div>
                <div className="flex-initial basis-1/2 pt-5">
                    <section className="pt-5 pb-5">
                        <h2 className="text-2xl text-center">私について</h2>
                        <div className="break-word whitespace-pre-wrap">
                            <ReactMarkdown>{intro}</ReactMarkdown>
                        </div>
                    </section>
                    <section className="pt-5 pb-5">
                        <h2 className="text-2xl text-center">
                            普段利用している技術
                        </h2>
                        <div className="flex align-center">
                            <ul className="ml-auto mr-auto">
                                {skillList.map(
                                    ({ name, Icon, description }, key) => {
                                        return (
                                            <li
                                                key={key}
                                                className="mt-2 mb-2 w-96"
                                            >
                                                <SkillCard
                                                    title={name}
                                                    icon={<Icon />}
                                                />
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                        </div>
                    </section>
                    <section className="pt-5 pb-5">
                        <h2 className="text-2xl text-center">製作物たち</h2>
                        <article>
                            <div className="p-5">
                                <ProductCard
                                    content={popropData.content}
                                    {...(popropData.data as any)}
                                />
                            </div>
                            <div className="p-5">
                                <ProductCard
                                    content={shooting_xData.content}
                                    {...(shooting_xData.data as any)}
                                />
                            </div>
                            <div className="p-5">
                                <ProductCard
                                    content={demomoniData.content}
                                    {...(demomoniData.data as any)}
                                />
                            </div>
                        </article>
                    </section>
                </div>
                <div className="flex-initial basis-1/4"></div>
            </div>
        </>
    )
}

export default ProfilePage
