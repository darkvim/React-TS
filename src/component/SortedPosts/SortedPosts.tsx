import { ISortedPosts } from '../../type/ISortedPosts'
import { ImagePreview } from '../ImagePreview'

import { motion } from 'framer-motion'



export const SortedPosts: React.FC<ISortedPosts> = ({
	sortedPosts,
	removePost,
	showNotFoundMessage,
}) => {
	
	return (
		<ul>
			{sortedPosts && sortedPosts.length !== 0 ? (
				sortedPosts.map(post => (
					<motion.li
						key={post.id}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
					>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
						<ImagePreview file={post.image} />
						<button onClick={() => removePost(post)}>Delete</button>
					</motion.li>
				))
			) : showNotFoundMessage ? (
				<h1 style={{ textAlign: 'center' }}>No posts</h1>
			) : null}
		</ul>
	)
}
