import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './topNavBar.module.css'

const TopNavBar = () => {

    const navigate = useNavigate()

  return (
    <nav className={styles.navBar}>
        <h2 className={styles.logo}>Housing App</h2>
        <button 
            className=' h-10 mx-4 px-4 tab rounded-full hover:bg-red-200 ease-in duration-300'
            onClick={() => navigate('/')}
            >
            Home
        </button>
        <div className=' w-max mx-4 h-11 grid grid-cols-2 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl'>
            <button 
                className='block h-10 px-6 tab rounded-l-full hover:bg-white ease-in duration-300'
                onClick={() => navigate('/to-rent/')}
                >
                To Rent
            </button>
            <button 
                className='block h-10 px-6 tab rounded-r-full hover:bg-white ease-in duration-300'
                onClick={() => navigate('/to-buy/')}
                >
                To Buy
            </button>
        </div>
        <button 
            className=' h-10 mx-4 px-4 tab rounded-full hover:bg-red-200 ease-in duration-300'
            onClick={() => navigate('/about/')}
            >
            About
        </button>
        <button 
            className=' h-10 mx-4 px-4 tab rounded-full hover:bg-red-200 ease-in duration-300'
            onClick={() => navigate('/contact-us/')}
            >
            Contact Us
        </button>
    </nav>
  )
}

export default TopNavBar