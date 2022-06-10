import React from 'react'
import profile from './images/profile.png'
import Github from 'devicon/icons/github/github-original.svg'

const Profile = () => {
    return (
        <div className="flex  bg-[#91bed4]">
            <div className="flex-1"></div>
            <div className="flex flex-auto">
                <img
                    className="flex-none w-72 rounded-full p-5"
                    src={profile}
                />
                <div className="flex flex-col justify-center pl-5">
                    <div className="flex-1 grid place-items-end">
                        <p className="underline text-center text-5xl">
                            ねぎまぐろ
                        </p>
                    </div>
                    <div className="flex-1 grid place-items-center">
                        <p className="text-center">はじめまして！</p>
                        <div className="w-8">
                            <a href="https://github.com/kume-negitoro">
                                <Github></Github>
                            </a>
                        </div>
                        <div>
                            <span>E-Mail: </span>
                            <span className="underline">
                                kume.negitoro[at]gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1"></div>
        </div>
    )
}

export default Profile
