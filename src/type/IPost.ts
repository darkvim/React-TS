export interface IPost {
	id: number
	title: string
	body: string
	image?: File | null
}

export type PostObject = {
	post: IPost
	stackPosts?: boolean
}

export interface IRemovePostFunc {
	removePost: (post: IPost) => void
}
