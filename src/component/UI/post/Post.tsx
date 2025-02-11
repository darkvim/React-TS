import { IRemovePostFunc, PostObject } from '../../../type/IPost'
import { ImagePreview } from '../../subcomponent/ImagePreview/ImagePreview'

import styles from './Post.module.scss'

export const Post: React.FC<PostObject & IRemovePostFunc> = ({
	post,
	removePost,
	stackPosts,
}) => {
	return (
		<>
			{stackPosts ? (
				<ImagePreview stackPosts={stackPosts} file={post.image} />
			) : (
				<>
					<ImagePreview file={post.image} />
					<div>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
						<button onClick={() => removePost(post)}>DELETE</button>
					</div>
				</>
			)}
		</>
	)
}
