import React from 'react'
import ReactMarkdown from 'react-markdown'
import Profile from './Profile'
import SkillCard from './SkillCard'
import { list as skillList } from './skills'
import intro from './informations/introduction.md'
import poprop from './informations/poprop.md'

const ProfilePage = () => {
    return (
        <>
            <Profile />
            <div className="flex">
                <div className="flex-initial basis-1/4"></div>
                <div className="flex-initial basis-1/2 pt-5">
                    <section className="pt-5 pb-5">
                        <h2 className="text-2xl">私について</h2>
                        <div className="break-word whitespace-pre-wrap">
                            <ReactMarkdown>{intro}</ReactMarkdown>
                        </div>
                    </section>
                    <section className="pt-5 pb-5">
                        <h2 className="text-2xl">普段利用している技術</h2>
                        {skillList.map(({ name, Icon, description }, key) => {
                            return (
                                <div key={key} className="mt-2 mb-2 w-96">
                                    <SkillCard title={name} icon={<Icon />} />
                                </div>
                            )
                        })}
                    </section>
                    <section className="pt-5 pb-5">
                        <h2 className="text-2xl">作品</h2>
                        <article>
                            <h3 className="text-xl">Poprop</h3>

                            <div>
                                <p>作品紹介</p>
                                <ReactMarkdown>{poprop}</ReactMarkdown>
                            </div>
                            <div>
                                <p>開発期間</p>
                            </div>
                            <div>
                                <p>開発人数</p>
                            </div>
                            <div>
                                <p>使用技術</p>
                            </div>
                            <div>
                                <p>役割</p>
                            </div>
                            <div>
                                <p>参考URL</p>
                                <a href="https://hacku.yahoo.co.jp/hacku2019sendai/?fbclid=IwAR0dEpb1djJVzl_box9pDORxtXperNPOFmS5QgMgNtjuaJTXdNVdCxdURFs">
                                    Hack U 2019 SENDAI
                                </a>
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
