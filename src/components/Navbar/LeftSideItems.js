import React from 'react'
import {Link } from "react-router-dom";
function LeftSideItems({ Items,Address}) {
    return (
            <Link className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-slate-50 hover:text-blue-400" to={Address}>
                {Items}
            </Link>


    )
}

export default LeftSideItems
