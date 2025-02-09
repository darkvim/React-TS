import { SetStateAction } from 'react'
import { IPost } from './IPost'

export interface IForm {
	addNewPost: (event: React.FormEvent<HTMLFormElement>) => void
	setPost: React.Dispatch<SetStateAction<IPost>>
	post: IPost
}
