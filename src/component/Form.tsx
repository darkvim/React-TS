import { useState } from 'react'
import { IForm } from '../type/IForm'
import { IPost } from '../type/IPost'

export const Form: React.FC<IForm> = ({ setPosts }) => {
	const [post, setPost] = useState<IPost>({
		id: Date.now(),
		title: '',
		body: '',
		image: null,
	})

	const addNewPost = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setPosts(prev => [...prev, post])
		setPost({ id: Date.now(), title: '', body: '', image: null })
	}

	return (
		<form onSubmit={addNewPost}>
			<input
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
				type='text'
				name='title'
				id='title'
			/>
			<input
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })}
				type='text'
				name='body'
				id='body'
			/>
			<input
				onChange={e => setPost({ ...post, image: e.target.files?.[0] })}
				type='file'
				name='file'
				id='file'
			/>
			<button type='submit'>Submit</button>
		</form>
	)
}
