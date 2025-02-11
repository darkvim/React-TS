import { useEffect, useMemo } from 'react'
import { IPost } from '../../type/IPost'
import { ISortedSection } from '../../type/ISortedSection'
import { SortedPosts } from './SortedPosts'

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
			{sortedAndSearchedPosts.length !== 0 ? (
				<SortedPosts
					removePost={removePost}
					sortedPosts={sortedAndSearchedPosts}
					showNotFoundMessage={false}
				/>
			) : null}

			<SortedPosts
				removePost={removePost}
				showNotFoundMessage
				sortedPosts={sortedPosts}
			/>
		</section>
	)
}
