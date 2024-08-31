import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {

    const [username, setUsername] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('http://localhost:3000/profile', {
                    method: 'GET',
                    credentials: 'include'
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user information');
                }

                const userInfo = await response.json();
                setUsername(userInfo.username);
            } catch (error) {
                console.error('Error fetching user info:', error);

            }
        };

        fetchUserInfo();
    }, []);

    const logout = async() => {
        try {
            const response = await fetch('http://localhost:3000/logout', {
                method:'POST',
                credentials:'include'
            })
            if (response.ok) {
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                navigate('/login')
            }else{
                console.error('Logout failed', response);
            alert('Logout failed. Please try again.');
            }
        } catch (error) {
            console.error('Logout failed', error.message);
            alert('Logout failed. Please try again.');
        }
    }
    return (

        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/'>
                    <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>

                        <span className="ml-3 text-xl">Blog App</span>
                    </p></Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {username ? (
                        <>
                            <Link to='/create'>
                                <p className="mr-5 hover:text-white cursor-pointer">Create</p>
                            </Link>
                            <Link to='/profile'>
                                <p className="mr-5 hover:text-white cursor-pointer">{username}</p>
                            </Link>


                            <p className="mr-5 hover:text-white cursor-pointer" onClick={()=>{
                                setShowModal(true)
                            }}>Logout</p>

                        </>
                    ) : (
                        <>
                            <Link to='/login'>
                                <p className="mr-5 hover:text-white cursor-pointer">Login</p>
                            </Link>
                            <Link to='/register'>
                                <p className="mr-5 hover:text-white cursor-pointer">Register</p>
                            </Link>
                        </>
                    )}




                </nav>

            </div>
            {showModal ? (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                            <h2 className="text-xl font-semibold mb-4">Logout</h2>
                            <p className="mb-6">Are you sure you want to log out?</p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => { setShowModal(false) }}
                                    className="mr-4 px-4 py-2 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => { 
                                        logout();
                                        setShowModal(false)
                                     }}
                                    className="px-4 py-2 bg-red-600 rounded-md text-white hover:bg-red-700"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </header>


    )
}

export default Navbar