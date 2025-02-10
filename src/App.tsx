import { useEffect, useState } from 'react'
import { SortedSection } from './component/SortedPosts/SortedSection'
import { Hr } from './component/UI/hr/Hr'
import { Modal } from './component/UI/modal/Modal'
import { IPost } from './type/IPost'

import { urlToFile } from './service/UrlToFile'
import { SearchSection } from './component/subcomponent/SearchSection'
import { Form } from './component/subcomponent/Form'

export default function App() {
	const [images, setImages] = useState<File[]>([])
	const title =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et a quo soluta'
	const body =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit. Repudiandae qui suscipit rerum necessitatibus obcaecati eligendi, accusantium quod et ab, debitis ullam eius pariatur nobis dolor. Illo, deleniti quis.'
	const [posts, setPosts] = useState<IPost[]>([
		{
			id: 1,
			title: title,
			body: body,
			image: images[0],
		},
		{
			id: 2,
			title: title,
			body: body,
			image: images[1],
		},
		{
			id: 3,
			title: title,
			body: body,
			image: images[2],
		},
	])

	useEffect(() => {
		const loadImages = async () => {
			const loadedImages = await Promise.all([
				urlToFile({
					url: '/images/1.jpg',
					fileName: '1.jpg',
					mimeType: 'image/jpeg',
				}),
				urlToFile({
					url: '/images/2.jpg',
					fileName: '2.jpg',
					mimeType: 'image/jpeg',
				}),
				urlToFile({
					url: '/images/3.jpg',
					fileName: '3.jpg',
					mimeType: 'image/jpeg',
				}),
			])
			setImages(loadedImages)
		}
		loadImages()
	}, [])

	useEffect(() => {
		if (images.length === 3) {
			setPosts(prevPosts =>
				prevPosts.map((post, index) => ({
					...post,
					image: images[index],
				}))
			)
		}
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
