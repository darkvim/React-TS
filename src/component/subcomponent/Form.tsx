import { useState } from 'react'
import { IPost } from '../../type/IPost'
import { IForm } from '../../type/IForm'
import { Input } from '../UI/input/Input'

export const Form: React.FC<IForm> = ({ setPosts, setVisible }) => {
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
		setVisible(false)
	}

	return (
		<form onSubmit={addNewPost}>
			<Input
				onChange={e => setPost({ ...post, title: e.target.value })}
				value={post.title}
				type='text'
			/>

			<Input
				onChange={e => setPost({ ...post, body: e.target.value })}
				value={post.body}
				type='text'
			/>

			<Input
				onChange={e => setPost({ ...post, image: e.target.files?.[0] })}
				type='file'
			/>

			<button type='submit'>Submit</button>
		</form>
	)
}
