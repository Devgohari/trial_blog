import React from 'react'

import LeftSideItems from './LeftSideItems'
import RightSidetems from './RightSidetems'
import CenterTitle from './CenterTitle'

function NavBar() {
    let Items = [['Home', '/'],['Blogs','/blog'], ['About', '/about'], ['Contact Me', '/contact']]
    return (
        <>
            {/* Had to fix overlay and make it sticky */}
            <nav className="h-1/5  flex bg-slate-700 z-5 flex-wrap items-center justify-between p-4">
                <CenterTitle Title="Let's Simplify" />
                <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
                    {Items.map((item) => {
                            return (
                                <LeftSideItems key={item[1]} Items={item[0]} Address={item[1]} />)
                        })
                    }
                </div>
                <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
                    <RightSidetems />
                </div>
            </nav>

        </>
    )
}

export default NavBar
