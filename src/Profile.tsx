import React from 'react'
import profile from './images/profile.png'

const Profile = () => {
    return (
        <div className="flex  bg-pink-200">
            <img className="flex-none w-128 rounded-full p-5" src={profile} />
            <div className="flex flex-col justify-center pl-5">
                <div className="flex-1 grid place-items-end">
                    <p className="underline text-center text-5xl">ねぎまぐろ</p>
                </div>
                <div className="flex-1 grid place-items-center">
                    <p className="text-center">はじめまして！</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
