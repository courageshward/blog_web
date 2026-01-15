import React from 'react'
import postImg from '../assets/pexels-realtoughcandy-11035473.jpg'

const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-2">
      
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src={postImg}
          alt="Post"
          className="h-40 w-60 object-contain"
        />
      </div>

      {/* right */}
      <div className="flex flex-col w-[65%] space-y-2">
        <h1 className="text-xl font-bold md:text-2xl">
          Mastering MERN Stack
        </h1>

        <div className="flex text-sm font-semibold text-gray-500 justify-between">
          <p>@woodpeckers</p>
          <div className="flex space-x-2">
            <p>11/11/2025</p>
            <p>05:36</p>
          </div>
        </div>

        <p className="text-sm">
          The MERN stack—MongoDB, Express.js, React, and Node.js—offers a full
          JavaScript-based framework for efficient web development.
        </p>
      </div>
    </div>
  )
}

export default ProfilePosts
