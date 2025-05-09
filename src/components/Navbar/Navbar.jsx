import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav className='bg-white shadow px-6 py-4'>
            <div className='flex items-center justify-between'>
                {/* left: Company Name */}
                <h1 className='text-xl font-bold text-blue-600'>Recipe Calories</h1>

                {/* Center: Nav Links Desktop */}
                <div className='hidden md:flex space-x-6'>
                    <a href="#" className='text-gray-600 hover:text-blue-600'>Home</a>
                    <a href="#" className='text-gray-600 hover:text-blue-600'>Recipes</a>
                    <a href="#" className='text-gray-600 hover:text-blue-600'>About</a>
                    <a href="#" className='text-gray-600 hover:text-blue-600'>Search</a>
                </div>

                {/* Right: Search & Profile */}
                <div className='relative flex items-center space-x-4'>

                    <CiSearch className=' absolute left-2 top-6/12 transform -translate-y-1/2 text-gray-600 text-xl font-bold hidden md:inline'></CiSearch>

                    <input type="text"
                        placeholder="    Search..."
                        className=" px-3 py-1 border-3 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400  placeholder:text-gray-600 sm:block hidden md:inline" />
                    <div>
                        <span><CgProfile className='text-blue-600 text-4xl'></CgProfile></span>
                    </div>

                    {/* Hamburger (Mobile) */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden focus:outline-none'>
                        {
                            menuOpen ? <IoClose id='close' className=' md:hidden text-gray-600 text-2xl hover:text-blue-600'></IoClose>:
                            <IoMdMenu id='menu' className=' md:hidden text-gray-600 text-2xl hover:text-blue-600'></IoMdMenu>
                        }
                        
                    </button>
                </div>
            </div>
            
            {
                menuOpen && (
                    <div className='md:hidden mt-2 px-6 space-y-2 flex justify-between'>
                        <a href="#" className=' text-gray-600 hover:text-blue-600'>Home</a>
                        <a href="#" className=' text-gray-600 hover:text-blue-600'>Recipes</a>
                        <a href="#" className=' text-gray-600 hover:text-blue-600'>About</a>
                        <a href="#" className=' text-gray-600 hover:text-blue-600'>Search</a>
                    </div>
                )
            }

        </nav>
    );
};

export default Navbar;

