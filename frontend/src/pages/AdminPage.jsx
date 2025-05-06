import React, { useState } from 'react'
import { motion } from "framer-motion"
import CreatePost from '../components/CreatePost'
import ManagePost from '../components/ManagePost'

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState("managePost")
    const tabs = [
        { id: "createPost", label: "Create Post" },
        { id: "managePost", label: "Manage Post" }
    ]

    return (
        <div className='min-h-screen'>
            <div>
                <motion.h1
                    className='text-center font-bold text-4xl'
                    initial={{ opacity: 0, z: -20 }}
                    animate={{ opacity: 1, z: 1 }}
                >Admin Panel</motion.h1>
                <div className='flex justify-center my-5 gap-4'>
                    {
                        tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={` py-3 px-3 rounded-lg cursor-pointer shadow-xl ${activeTab === tab.id ? "bg-yellow-500 text-black" : "bg-gray-700 text-gray-300 hover:underline"}`} >
                                {tab.label}
                            </button>
                        ))
                    }
                </div>

                {activeTab === "createPost" && <CreatePost />}
                {activeTab === "managePost" && <ManagePost />}

            </div>


        </div>
    )
}

export default AdminPage

