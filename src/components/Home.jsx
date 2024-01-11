import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Pokemon API</h1>
        <p className="text-gray-600 mb-8">
        Pokemon API for your real-world project practice. This is for educational purposes.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/kyawminht/pokemon_api"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600"
          >
            View on GitHub
          </a>
          <Link
            to="/docs"
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
          >
            Read Docs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
