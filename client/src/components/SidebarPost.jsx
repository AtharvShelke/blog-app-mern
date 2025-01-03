
import { Link } from 'react-router-dom'

const SidebarPost = (props) => {
    return (
        <>
            <Link to={`/blog/${props._id}`}>
                <div className='bg-gray-900 p-4 rounded-xl'>
                    <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        {props.title}
                    </p>

                    <div className="flex items-center mt-6">
                    <img className="object-cover object-center w-10 h-10 rounded-full" src={props.authorPfp} alt="" />

                    <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{props.author}</h1>

                    </div>
                </div>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />
        </Link >
        </>
    )
}

export default SidebarPost