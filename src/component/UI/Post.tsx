import { IRemovePostFunc, PostObject } from '../../type/IPost'
import { ImagePreview } from '../ImagePreview'

export const Post: React.FC<PostObject & IRemovePostFunc> = ({
	post,
	removePost,
}) => {
	return (
		<li key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
			<ImagePreview file={post.image} />
			<button onClick={() => removePost(post)}>Delete</button>
		</li>
	)
}
