import { Flag } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="mx-auto grid place-items-center text-center px-8">
            <div>
                <Flag className="w-20 h-20 mx-auto" />
                <p className="mt-10 !text-3xl !leading-snug md:!text-4xl">
                    Error 404 <br /> It looks like something went wrong.
                </p>
                <p className="mt-5 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
                    Hold tight! We can't find this page right now. Refresh or come back later.
                </p>
                <Link to={"/"} className="px-4 md:w-[8rem] bg-black py-4 rounded-md text-white cursor-pointer" >
                    Back Home
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage
