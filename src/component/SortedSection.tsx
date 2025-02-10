import { useMemo } from 'react'
import { SortedPosts } from './SortedPosts'
import { ISortedSection } from '../type/ISortedSection'
import { IPost } from '../type/IPost'

export const SortedSection: React.FC<ISortedSection> = ({
	posts,
	sortField,
	searchQuery,
	setPosts,
}) => {
	const removePost = (post: IPost) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const sortedPosts = useMemo(() => {
		return [...posts].sort((first, second) =>
			String(first[sortField]).localeCompare(String(second[sortField]))
		)
	}, [posts, sortField])

	const sortedAndSearchedPosts = useMemo(() => {
		if (searchQuery)
			return sortedPosts.filter(post =>
				post.title.toLowerCase().includes(searchQuery)
			)
		else return []
	}, [searchQuery, posts])

	return (
		<section>
			<SortedPosts
				removePost={removePost}
				sortedPosts={sortedAndSearchedPosts}
				showNotFoundMessage={false}
			/>
			<SortedPosts
				removePost={removePost}
				showNotFoundMessage
				sortedPosts={sortedPosts}
			/>
		</section>
	)
}
