import React from 'react'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import { useInView } from 'react-intersection-observer'

import Profile from './Profile'
import SkillCard from './SkillCard'
import ProductCard from './ProductCard'
import AchievementCard from './AchievementCard'
import { FadeIn } from './functional/FadeIn'

import { list as skillList } from './skills'
import intro from './informations/introduction.md'
import poprop from './informations/poprop.md'
import shooting_x from './informations/shooting-x.md'
import demomoni from './informations/demomoni.md'
import hackuhakodate2018 from './informations/hack-u-hakodate-2018.md'
import hacku2019sendai from './informations/hack-u-2019-sendai.md'
import projectlearning from './informations/project-learning-presentation.md'
import bizsysd2020 from './informations/2020-enpit-bizsysd.md'
import mayorsaward from './informations/mayors-award.md'
import driverslicense from './informations/drivers-license.md'
import fundamentalinformation from './informations/fundamental-information.md'
import history from './informations/history.md'

import popropImage from './images/poprop.png'
import shootingxImage from './images/shooting-x.png'
import demomoniImage from './images/demomoni.png'
import HistoryCard from './HistoryCard'

const popropData = matter(poprop)
const shooting_xData = matter(shooting_x)
const demomoniData = matter(demomoni)
const hackuhakodate2018Data = matter(hackuhakodate2018)
const hacku2019sendaiData = matter(hacku2019sendai)
const projectlearningData = matter(projectlearning)
const bizsysd2020Data = matter(bizsysd2020)
const mayorsawardData = matter(mayorsaward)
const driverslicenseData = matter(driverslicense)
const fundamentalIinformationData = matter(fundamentalinformation)
const historyData = matter(history)

const ProfilePage = () => {
    const {
        ref: popropRef,
        inView: popropInView,
        entry: popropEntry,
    } = useInView()
    return (
        <>
            <Profile />
            <div className="flex bg-[#d9e8f5]">
                <div className="flex-initial basis-1/4"></div>
                <div className="flex-initial basis-1/2 pt-5">
                    <section className="pt-5 pb-5">
                        <h2 className="text-2xl text-center">私について</h2>
                        <div className="break-word whitespace-pre-wrap">
                            <ReactMarkdown>{intro}</ReactMarkdown>
                        </div>
                    </section>
                    <hr className="h-0.5 bg-[#304264]" />
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
                    <hr className="h-0.5 bg-[#304264]" />
                    <section className="pt-5 pb-5">
                        <h2 className="text-2xl text-center">製作物たち</h2>
                        <article>
                            <FadeIn duration={500}>
                                <ProductCard
                                    content={popropData.content}
                                    image={<img src={popropImage}></img>}
                                    {...(popropData.data as any)}
                                />
                            </FadeIn>
                            <FadeIn duration={500}>
                                <ProductCard
                                    content={shooting_xData.content}
                                    image={<img src={shootingxImage}></img>}
                                    {...(shooting_xData.data as any)}
                                />
                            </FadeIn>
                            <FadeIn duration={500}>
                                <ProductCard
                                    content={demomoniData.content}
                                    image={<img src={demomoniImage}></img>}
                                    {...(demomoniData.data as any)}
                                />
                            </FadeIn>
                        </article>
                    </section>
                    <hr className="h-0.5 bg-[#304264]" />
                    <section className="pt-5 pb-5">
                        <h2 className="text-2xl text-center">受賞歴</h2>
                        <div>
                            <FadeIn duration={500}>
                                <AchievementCard
                                    {...(hackuhakodate2018Data.data as any)}
                                />
                            </FadeIn>
                            <FadeIn duration={500}>
                                <AchievementCard
                                    {...(hacku2019sendaiData.data as any)}
                                />
                            </FadeIn>
                            <FadeIn duration={500}>
                                <AchievementCard
                                    {...(projectlearningData.data as any)}
                                />
                            </FadeIn>
                            <FadeIn duration={500}>
                                <AchievementCard
                                    {...(bizsysd2020Data.data as any)}
                                />
                            </FadeIn>
                            <FadeIn duration={500}>
                                <AchievementCard
                                    {...(mayorsawardData.data as any)}
                                />
                            </FadeIn>
                        </div>
                    </section>
                    <hr className="h-0.5 bg-[#304264]" />
                    <section className="pt-5 pb-5">
                        <h2 className="text-2xl text-center">経歴</h2>
                        <div>
                            <FadeIn duration={500}>
                                <HistoryCard
                                    experiences={
                                        historyData.data.experiences as any
                                    }
                                />
                            </FadeIn>
                        </div>
                    </section>
                    <hr className="h-0.5 bg-[#304264]" />
                    <section className="pt-5 pb-5">
                        <h2 className="text-2xl text-center">資格</h2>
                        <div>
                            <FadeIn duration={500}>
                                <AchievementCard
                                    description={driverslicenseData.content}
                                    {...(driverslicenseData.data as any)}
                                />
                            </FadeIn>
                            <FadeIn duration={500}>
                                <AchievementCard
                                    description={
                                        fundamentalIinformationData.content
                                    }
                                    {...(fundamentalIinformationData.data as any)}
                                />
                            </FadeIn>
                        </div>
                    </section>
                </div>
                <div className="flex-initial basis-1/4"></div>
            </div>
        </>
    )
}

export default ProfilePage
