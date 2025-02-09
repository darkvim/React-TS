import React from 'react'
import { IPost } from './IPost'

export interface ISelect {
	setSortField: React.Dispatch<React.SetStateAction<keyof IPost>>
	options?: IOptions[]
}

export interface IOptions {
	value: string
	text: string
}
