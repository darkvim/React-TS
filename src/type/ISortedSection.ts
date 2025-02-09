import React from 'react'
import { IPost } from './IPost'

export interface ISortedSection {
	posts: IPost[]
	sortField: keyof IPost
	searchQuery: string
	setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
}
