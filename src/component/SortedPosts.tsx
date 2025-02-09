import { ISortedPosts } from '../type/ISortedPosts'
import { ImagePreview } from './ImagePreview'

export const SortedPosts: React.FC<ISortedPosts> = ({
	sortedPosts,
	removePost,
	showNotFoundMessage,
}) => {
	return (
		<ul>
			{sortedPosts && sortedPosts.length !== 0 ? (
				sortedPosts.map(post => (
					<li key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
						<ImagePreview file={post.image} />
						<button onClick={() => removePost(post)}>Delete</button>
					</li>
				))
			) : showNotFoundMessage ? (
				<h1 style={{ textAlign: 'center' }}>No posts</h1>
			) : null}
		</ul>
	)
}
