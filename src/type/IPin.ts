export interface IPin {
	id: number
	title: string
	body: string
	image?: File | null
}

export type PinObject = {
	pin: IPin
	stackPins?: boolean
}

export interface IRemovePinFunc {
	removePin: (pin: IPin) => void
}
