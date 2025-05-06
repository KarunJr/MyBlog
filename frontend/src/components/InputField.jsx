// const InputField = ({ field, value, onChange }) => (
//     <div className='mt-3'>
//         <label htmlFor={value}>{field}:</label>
//         <input
//             id={value}
//             className='border border-black px-3 py-2 w-full mt-3 rounded-lg focus:ring-2 focus:outline-none focus:ring-indigo-400 focus:shadow-2xl'
//             type={value}
//             required
//             value={value}
//             onChange={onChange}
//         />
//     </div>
// )
import React from 'react'

const InputField = ({id, field, type, value, onChange }) => {
    return (
        <div className='mt-3'>
            <label htmlFor={id}>{field}:</label>
            <input
                id={id}
                className='border border-black px-3 py-2 w-full mt-3 rounded-lg focus:ring-2 focus:outline-none focus:ring-indigo-400 focus:shadow-2xl'
                type={type}
                required
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputField
