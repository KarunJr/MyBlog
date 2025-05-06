import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Upload } from "lucide-react"
import { useBlogStore } from '../stores/useBlogStore';

const categories = ["Sports", "Technology", "Gaming"]
const CreatePost = ({ placeholder }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = useMemo(() => ({
		readonly: false, // all options from https://xdsoft.net/jodit/docs/,
		placeholder: placeholder || 'Start typings...'
	}),
		[placeholder]
	);

	const [title, setTitle] = useState("")
	const [summary, setSummary] = useState("")
	const [image, setImage] = useState("")
	const [category, setCategory] = useState("")

	const { addBlog } = useBlogStore()
	const handleCreatePost = (e) => {
		e.preventDefault()
		addBlog(title, summary, category, image, content)
		setTitle("")
		setSummary("")
		setImage("")
		setCategory("")
		setContent("")
	}

	const handleImage = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader()

			reader.onloadend = () => {
				setImage(reader.result)
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div className=''>
			<form onSubmit={handleCreatePost}>
				<label htmlFor="title">
					<input
						type="text"
						id='title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
						className='border w-full p-2 rounded-md focus:ring-2 focus:ring-yellow-200 focus:outline-none focus:ring-offset-2 mt-3' placeholder='Title' />
				</label>

				<label htmlFor="summary">
					<textarea
						id='summary'
						required
						value={summary}
						onChange={(e) => setSummary(e.target.value)}
						className='border w-full p-2 rounded-md focus:ring-2 focus:ring-yellow-200 focus:outline-none focus:ring-offset-2 mt-3' placeholder='Summary' />
				</label>

				<div className='w-full py-1'>
					<label htmlFor="category" className='text-gray-500'></label>

					<select
						id="category"
						required
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						className='py-2 border w-full rounded-md'>
						<option value="">Selecet Category: </option>
						{
							categories.map((category) => (
								<option
									key={category}
									value={category}
								>{category}</option>
							))
						}
					</select>
				</div>

				<div className='flex items-center'>
					<input
						type="file"
						id='image'
						className='sr-only'
						accept='image/*'
						onChange={handleImage} />

					<label htmlFor="image" className='cursor-pointer  mt-2 bg-gray-300 w-fit py-2 px-2 rounded-md'>
						<Upload className='inline-block mr-2' />
						Upload Image
					</label>
					{
						image && <span className='mt-2 ml-3'>Image uploaded.</span>
					}
				</div>


				<div className='mt-3'>
					<JoditEditor
						ref={editor}
						value={content}
						config={config}
						tabIndex={1} // tabIndex of textarea
						onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
						onChange={newContent => { }}
					/>
				</div>

				<div className='flex justify-center mt-3'>
					<button className='bg-yellow-500 py-2 px-3 rounded-md shadow-xl cursor-pointer transition-colors transform ease-in-out duration-500 hover:bg-yellow-600' type='submit'>
						Create
					</button>
				</div>
			</form>

		</div>
	);
};

export default CreatePost

