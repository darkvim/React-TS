import { useEffect, useMemo, useState } from 'react'
import { SortedSection } from './component/SortedPosts/SortedSection'
import { Hr } from './component/UI/hr/Hr'
import { Modal } from './component/UI/modal/Modal'
import { IPost } from './type/IPost'

import { SearchSection } from './component/subcomponent/SearchSection'
import { Form } from './component/subcomponent/Form'
import { getAllImages } from './service/temp'

export default function App() {
	const [images, setImages] = useState<File[]>([])
	const [posts, setPosts] = useState<IPost[]>([])

	useEffect(() => {
		const fetchAllImages = async () => {
			const data = await getAllImages()
			setImages(data)
			console.log('FILES: ', data)
		}
		fetchAllImages()
	}, [])

	useEffect(() => {
		if (images.length === 0) return
		if (!images[1]) return

		const newPosts = images.map((file, index) => ({
			id: Date.now() + index,
			body: 'Somebody...',
			title: 'title',
			image: file,
		}))

		setPosts(newPosts)
	}, [images])

	const [searchQuery, setSearchQuery] = useState<string>('')
	const [sortField, setSortField] = useState<keyof IPost>('title')
	const [visible, setVisible] = useState<boolean>(false)

	return (
		<main>
			<SearchSection
				setSearchQuery={setSearchQuery}
				setSortField={setSortField}
			/>

			<Hr />

			<Modal
				visible={visible}
				setVisible={setVisible}
				children={<Form setPosts={setPosts} setVisible={setVisible} />}
			/>

			<button onClick={() => setVisible(!visible)}>Create post</button>

			<SortedSection
				posts={posts}
				searchQuery={searchQuery}
				setPosts={setPosts}
				sortField={sortField}
			/>
		</main>
	)
}
