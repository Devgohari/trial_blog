import React from 'react'
import { Link } from "react-router-dom";
import Insta from './Icons/Insta.png'
import Twitter from './Icons/Twitter.png'
import Facebook from './Icons/Facebook.png'
function RightSideItems({ Icons }) {
    
    return (
        <>
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-5  text-slate-50 hover:text-blue-400" href="https://www.instagram.com/devgohari/" target={"_blank" }>
                <img src={Insta} className='h-5 className="filter invert |"' alt="" />
            </a>
            <Link className="block lg:inline-block mt-4 lg:mt-0 mr-5  text-slate-50 hover:text-blue-400" to="#">
                <img src={Facebook} className='h-5 className="filter invert |"' alt="" />

            </Link>
            <Link className="block lg:inline-block mt-4 lg:mt-0 mr-5  text-slate-50 hover:text-blue-400" to="#">
                <img src={Twitter} className='h-5 className="filter invert |"' alt="" />
            </Link>
            <Link className="block lg:inline-block  text-slate-50 hover:text-blue-400" to="#">
                <input type="text" className="block mt-4 lg:mt-0 mr-4 w-48 py-1.5 pl-10  leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 aa-input" placeholder="Search" />
            </Link>

        </>
    )
}

export default RightSideItems
