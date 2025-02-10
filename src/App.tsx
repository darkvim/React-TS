import { useState } from 'react'
import { SearchSection } from './component/SearchSection'
import { SortedSection } from './component/SortedSection'
import { Hr } from './component/UI/Hr'
import { Modal } from './component/UI/modal/Modal'
import { IPost } from './type/IPost'
import { Form } from './component/Form'

export default function App() {
	const [posts, setPosts] = useState<IPost[]>([
		{ id: 1, title: 'аа', body: 'яя', image: null },
		{ id: 2, title: 'яя', body: 'бб', image: null },
		{ id: 3, title: 'бб', body: 'гг', image: null },
	])

	const [searchQuery, setSearchQuery] = useState<string>('')
	const [sortField, setSortField] = useState<keyof IPost>('title')

	return (
		<main>
			<SearchSection
				setSearchQuery={setSearchQuery}
				setSortField={setSortField}
			/>

			<Hr />

			<Modal children={<Form setPosts={setPosts} />} />

			<SortedSection
				posts={posts}
				searchQuery={searchQuery}
				setPosts={setPosts}
				sortField={sortField}
			/>
		</main>
	)
}
