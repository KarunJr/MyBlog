import React from 'react'
import { motion } from "framer-motion"
import {Trash, SquarePen} from "lucide-react"
const ManagePost = () => {
  return (
    // <>
    
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.9, delay: 0.3 }}
    //     className='bg-gray-800 text-white rounded-lg p-2 shadow-xl'
    //   >
    //       <table className='w-1/2 divide-y divide-amber-400 mx-auto'>
    //         <thead className='bg-gray-700'>
    //           <tr className=' '>
    //             <th
    //               scope='col'
    //               className='tracking-wider py-3 text-gray-300 uppercase text-left px-6'
    //             >Thumbnail</th>
    //             <th
    //               scope='col'
    //               className='tracking-wider py-3 uppercase text-left px-6 text-gray-300'
    //             >Title</th>
    //             <th
    //               scope='col'
    //               className='tracking-wider py-3 uppercase text-left px-6 text-gray-300'
    //             >Actions</th>
    //           </tr>
    //         </thead>

    //         <tbody className='bg-gray-800 divide-y divide-gray-600'>
    //           <tr className=''>
    //             <td>
    //               <div className='h-30 px-3 py-3'>
    //                 <img src="https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png" alt="" className='h-full  rounded-md object-cover' />
    //               </div>
    //             </td>
    //             <td className='text-base font-medium text-left'>How to make Money online?</td>
    //             <td className='text-base font-medium text-left'>
    //               <div className='flex gap-3 pl-9'>
    //                 <button>
    //                  <Trash/> 
    //                 </button>
    //                 <button>
    //                   <SquarePen/>
    //                 </button>
    //               </div>
    //             </td>
    //           </tr>
    //         </tbody>

    //       </table>
    //   </motion.div>
    // </>
    <div className='bg-gray-800 py-4 px-3 rounded-md shadow-xl'>
      <table className='bg-gray-700 mx-auto w-1/2'>
        <thead>
          <tr>
            <th className='text-left px-3'>Thumbnail</th>
            <th className='text-left px-3'>Thumbnail</th>
            <th className='text-left px-3'>Thumbnail</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>image</td>
            <td>How to make money</td>
            <td>Delete Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ManagePost
