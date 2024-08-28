import React from 'react'

const Navbar = () => {
  return (
    
    <header className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
  <path d="M3 4h18v2H3zM6 8h12v2H6zM9 12h6v2H9z" />
  <path d="M12 18c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3z" />
  <path d="M4 21v-3a4 4 0 014-4h8a4 4 0 014 4v3H4z" />
</svg>

        <span className="ml-3 text-xl">Blog App</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-white cursor-pointer">Login</a>
        <a className="mr-5 hover:text-white cursor-pointer">Register</a>
        
      </nav>
      
    </div>
  </header>
    
  )
}

export default Navbar