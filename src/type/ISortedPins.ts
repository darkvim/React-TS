import { IPin } from './IPin'

export interface ISortedPins {
	sortedPins: IPin[]
	showNotFoundMessage?: boolean
	stack?: boolean
}
