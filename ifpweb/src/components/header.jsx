import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="bg-white border-b-4 border-[#005197] dark:bg-gray-900">
        <div className="max-w-screen-xl gap-4 flex flex-row  items-center justify-center mx-auto p-4">
          <a href="https://www.ssn.edu.in/" className="flex items-center">
            <img
              src="https://www.ssn.edu.in/wp-content/uploads/2019/12/logo.jpg"
              className="md:w-32 md:h-16 w-24"
              alt="SSN logo" 
            />
          </a>
          <div className="flex-col flex text-center">
            <h2 className="md:text-5xl font-bold text-xl text-[#005197]">
            Vehicle Entry <br /> Management System
            </h2>
            
          </div>
          
        </div>
      </nav>
    </div>
  )
}

export default Header