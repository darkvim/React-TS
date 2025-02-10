import { IPost } from './IPost'

export interface ISortedPosts {
	sortedPosts: IPost[]
	removePost: (post: IPost) => void
	showNotFoundMessage?: boolean
	stack?: boolean
}
