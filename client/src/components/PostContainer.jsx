import React from 'react'
import Post from './Post'

const PostContainer = () => {
  return (
    <>
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>

        </section>
        
    </>
  )
}

export default PostContainer