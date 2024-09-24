import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import Loader from './Loader';

const Hero = () => {

    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [thumbnail, setThumbnail] = useState();
    const [author, setAuthor] = useState();
    const [authorPfp, setAuthorPfp] = useState();
    
    useEffect(() => {
        const fetchLatestPost = async () => {
            
            const response = await fetch('http://localhost:3000/post/getLatestPost', {
                method: 'GET'

            });
            if (!response.ok) {
                
                throw new Error('Error in fetching latest post');

            }
            const post = await response.json();


            setId(post._id)
            setTitle(post.title)
            setThumbnail(post.thumbnail)
            setAuthor(post.author)
            setAuthorPfp(post.authorPfp)
            
        }
        fetchLatestPost();
        
    }, []);

    return (

        <>
            <section className="bg-white dark:bg-gray-900 pt-6">
                
                    <div className="container px-6 py-7 mx-auto">
                        <div className="lg:flex lg:-mx-6">

                            <div className="lg:w-3/4 lg:px-6">
                                <Link to={`/blog/${id}`}>
                                    <img className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src={thumbnail} alt="" />
                                    <div>
                                        <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                                            {title}
                                        </h1>

                                        <div className="flex items-center mt-4">
                                            <img className="object-cover object-center w-10 h-10 rounded-full" src={authorPfp} alt="" />

                                            <div className="mx-4">
                                                <h1 className="text-sm text-gray-700 dark:text-gray-200">{author}</h1>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <Sidebar />
                        </div>
                    </div>

                
            </section>
        </>
    )
}

export default Hero