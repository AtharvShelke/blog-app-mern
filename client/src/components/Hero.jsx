import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1724745622131-67c190438f60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">Exploring the Grandeur of Ancient Roman Architecture
                            
                        </h1>
                        <p className="text-sm mb-3">Date:29/08/2024</p>
                        <p className="mb-8 leading-relaxed text-xl">Ancient Roman architecture is a testament to the ingenuity, ambition, and grandeur of one of history’s most powerful civilizations. The Romans were master builders, borrowing heavily from their predecessors, the Greeks, and Etruscans, while also introducing innovations that would set their structures apart.</p>
                        <div className="flex justify-center">
                            <Link to='/blog'><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero