import React from 'react'

function CenterTitle({Title}) {
    return (
        <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <a className="text-xl  text-slate-50 hover:text-blue-400 hover:cursor-pointer font-semibold font-heading" href="#">
            {Title}
        </a>
    </div>
    )
}

export default CenterTitle
