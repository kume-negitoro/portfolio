import React from 'react'
import Profile from './Profile'
import SkillCard from './SkillCard'
import { list as skillList } from './skills'

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
                            公立はこだて未来大学 大学院 システム情報科学研究科
                            システム情報科学専攻 知能情報科学領域 1年生です。
                            中学生の頃にIT技術に興味を持ち始め、国立函館工業高等専門学校に進学。
                            プログラミングやネットワークなどIT技術の基礎を学んだほか、ゲーム製作やハッカソンなども経験してきました。
                            現在はTypeScriptでのフロントエンド開発の実践や、流行の機械学習技術の基礎を勉強しています。
                            大学院では、ライフログ映像からの興味領域の推定について研究しています。
                            とにかく技術が好きです。新しい技術を使ってみたり、実装を考えたり、成果物が動いた時が一番楽しいので、エンジニアとして開発の仕事ができると良いなあと思っています。
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
                                <div>
                                    Hack U SENDAI
                                    に向けて制作したWebアプリケーションです。
                                    Hack U
                                    をハックする、をテーマにWord2Vecを利用したブレーンストーミング支援アプリ。一人でもブレーンストーミングができることや発展性が高いことが評価され、Hack
                                    U SENDAI 2019 で最優秀賞を受賞しました。
                                    アイデアが思いつかないのを逆手に、アイデア出し支援のためのアプリケーションを開発することになった。
                                </div>
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
