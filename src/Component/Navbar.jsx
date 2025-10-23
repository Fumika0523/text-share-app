import React from 'react'

const Navbar = () => {

const handleMainClick = () => {
    // go to the home page (remove ?id=... from URL)
    window.location.href = window.location.origin
}

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 z-50">
     <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-2">

        <div className="text-xl font-bold text-indigo-600 cursor-pointer hover:text-indigo-700 transition-colors duration-200"
        onClick = {handleMainClick}>TextShare</div>
        </div>
    </nav>
  )
}

export default Navbar