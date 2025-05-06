import React, { useState } from "react"
import toast from "react-hot-toast";
const Newsletter = () => {
    const [email, setEmail] = useState("")

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Email is: ', email);
        setEmail("")
        toast.success("Your email has been received. Thank you for subscribing.")
    }
    return (
        <div className="flex flex-col justify-center items-center ">
            <div className="py-3 -mt-3">
                <h5 className="text-fuchsia-700 text-lg text-center">Newsletters</h5>
                <h2 className="text-center py-3 text-3xl font-bold">Stories and Interviews</h2>
                <p className="text-center">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            </div>

            <div className="flex justify-center items-center mt-3 w-full">
                <form onSubmit={handleSubscribe} className="flex items-center flex-col lg:flex-row gap-2 ">
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter your email"
                        required
                        className="border py-3 rounded-lg px-2 w-full" onChange={(e) => setEmail(e.target.value)}
                    />

                    <button type="submit" className="bg-gradient-to-r from-[#DA22FF] via-[#9733EE] to-[#DA22FF] 
            bg-[length:200%_auto] text-white px-3 py-3  text-center rounded-lg 
            shadow-lg transition-all duration-500 ease-in-out hover:bg-[position:right_center] cursor-pointer">
                        Subscribe
                    </button>
                </form>
            </div>
            <p className="mt-2 text-xs text-gray-4700 sm:mr-30">We care your data in our <span className="underline">privacy policy</span></p>
        </div>
    )
}

export default Newsletter
