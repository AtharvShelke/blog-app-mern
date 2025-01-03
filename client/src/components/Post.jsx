
import { Link } from 'react-router-dom'

const Post = (props) => {
    
    return (
        <>
            <Link to={`/blog/${props._id}`}>
            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src={props.thumbnail} alt={'Thumbnail'} />

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        {props.title}
                    </p>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        {props.summary}
                    </p>
                    <div className="flex items-center mt-6">
                                    <img className="object-cover object-center w-10 h-10 rounded-full" src={props.authorPfp} alt="" />

                                    <div className="mx-4">
                                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{props.author}</h1>
                                        
                                    </div>
                                </div>
                </div>
            </div>
            </Link>

        </>
    )
}

export default Post