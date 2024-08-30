import React, { useEffect, useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
  
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log(data.token);
      localStorage.setItem('token', data.token)
      
      alert('Login Successful')

    } else {
      alert('Login Failed');
    }
  };

 
  return (
    <>

      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1724926201899-40530ae44ee4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600" href="/">

                <span>Home</span>
              </a>
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Blog App
              </h1>


              <p className="mt-4 leading-relaxed text-gray-500">
                Share your thoughts, engage with the community, and stay updated with the latest posts from your favorite writers.
              </p>

              <form className="mt-8 grid grid-cols-6 gap-6"
              onSubmit={loginUser}>




                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                </div>







                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-900 focus:outline-none focus:ring active:text-gray-900"
                   
                  >
                    Login
                  </button>


                </div>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  New User?
                  <a href="/register" className="block text-gray-700 underline">Sign Up</a>.
                </p>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>

  )
}

export default Login