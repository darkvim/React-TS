import { ISortedPosts } from '../../type/ISortedPosts'

import { motion } from 'framer-motion'
import { Post } from '../UI/post/Post'

import styles from './SortedPosts.module.scss'
import { useState } from 'react'

export const SortedPosts: React.FC<ISortedPosts> = ({
	sortedPosts,
	removePost,
	showNotFoundMessage,
}) => {
	const [stackPosts, setStackPosts] = useState<boolean>(true)

	const ulStack = styles.ulStack
	const ulList = styles.ulList

	const postList = styles.postList
	const postStack = styles.postStack

	return (
		<>
			<div>
				<span onClick={() => setStackPosts(false)}>List</span>
				<span onClick={() => setStackPosts(true)}>Stack</span>
			</div>
			<ul className={stackPosts ? ulStack : ulList}>
				{sortedPosts && sortedPosts.length !== 0 ? (
					sortedPosts.map(post => (
						<motion.li
							className={stackPosts ? postStack : postList}
							key={post.id}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3 }}
						>
							<Post
								stackPosts={stackPosts}
								post={post}
								removePost={removePost}
								key={post.id}
							/>
						</motion.li>
					))
				) : showNotFoundMessage ? (
					<h1 style={{ textAlign: 'center' }}>No posts</h1>
				) : null}
			</ul>
		</>
	)
}
