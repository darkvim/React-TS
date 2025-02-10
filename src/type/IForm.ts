import React, { SetStateAction } from 'react'
import { IPost } from './IPost'

export interface IForm extends React.ComponentProps<'form'> {
	setPosts: React.Dispatch<SetStateAction<IPost[]>>
}
