import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ props }) => {
    return (
        <>
            <Link to='/blog'>
            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        All the features you want to know
                    </p>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                    <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                </div>
            </div>
            </Link>

        </>
    )
}

export default Post