import { Loader } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center flex-col gap-4 h-92 justify-center'>
      <Loader className='animate-spin block' size={34}/>
      <p className='block text-2xl'>Loading...</p>
    </div>
  )
}

export default Loading
