import React, { useState } from 'react'
import { IPost } from './type/IPost'
import { Form } from './component/Form'
import { Hr } from './component/UI/Hr'
import { SearchSection } from './component/SearchSection'
import { SortedSection } from './component/SortedSection'

export default function App() {
	const [posts, setPosts] = useState<IPost[]>([
		{ id: 1, title: 'аа', body: 'яя', image: null },
		{ id: 2, title: 'яя', body: 'бб', image: null },
		{ id: 3, title: 'бб', body: 'гг', image: null },
	])

	const [post, setPost] = useState<IPost>({
		id: Date.now(),
		title: '',
		body: '',
		image: null,
	})

	const [searchQuery, setSearchQuery] = useState<string>('')
	const [sortField, setSortField] = useState<keyof IPost>('title')

	const addNewPost = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setPosts(prev => [...prev, post])
		setPost({ id: Date.now(), title: '', body: '' })
	}

	return (
		<main>
			<SearchSection
				setSearchQuery={setSearchQuery}
				setSortField={setSortField}
			/>

			<Hr />

			<Form addNewPost={addNewPost} setPost={setPost} post={post} />

			<SortedSection
				posts={posts}
				searchQuery={searchQuery}
				setPosts={setPosts}
				sortField={sortField}
			/>
		</main>
	)
}
