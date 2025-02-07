import React from 'react'

function Hero() {
  return (
    <div className="flex flex-col items-center text-center py-20 px-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-400">
          <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <p className="mt-2 bg-white px-2 py-1 rounded-full shadow text-md">Your Name 👋</p>
        <h1 className="text-md font-semibold mt-4">Building digital <span className="text-gray-800">products</span>, <span className="text-gray-800">brands</span>, and <span className="text-gray-800">experience</span>.</h1>
        <button className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">Latest Shots</button>
      </div>
  )
}

export default Hero