import { ReactNode } from 'react'
import { IPin } from '../IPin'

export interface IPinContext {
	pins: IPin[]
	setPins: React.Dispatch<React.SetStateAction<IPin[]>>
}

export interface IPinContextProvider {
	children: ReactNode
}

export interface IReactNode {
	children: ReactNode
}
