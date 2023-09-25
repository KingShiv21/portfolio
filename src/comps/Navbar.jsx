import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ViewStreamIcon from '@mui/icons-material/ViewStream';

const Navbar = () => {
    
    const [oldNavbar, setNavbar] = useState(true)
    return (
        <div>
            <div className=" bg-cyan-900">
                <div className=" pl-3 py-5 sm:py-8">
                    <div className=" sm:invisible visible sm:h-0">
                        <button className=" border-2 border-yellow-400 rounded-md w-20 bg-black text-white px-auto" onClick={() => { setNavbar(!oldNavbar) }}>
                            < ViewStreamIcon />
                        </button>
                    </div>


                    <ul className={oldNavbar ? "h-0 sm:h-auto invisible sm:visible space-x-8 mx-auto justify-center text-3xl font-bold text-white flex " : "mt-3 space-y-3 mx-auto justify-center text-xl font-bold text-white   sm:mt-0 sm:space-y-0 sm:text-3xl sm:flex sm:space-x-8"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/experience">Experience</Link>
                        </li>


                    </ul>


                </div>

            </div>
        </div>
    )
}

export default Navbar
