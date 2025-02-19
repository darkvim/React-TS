import { useState } from 'react'
import { IPin } from '../../type/IPin'
import { PinContext } from './PinContext'
import { IPinContextProvider } from '../../type/context/IPinContextProvider'

export const PinContextProvider: React.FC<IPinContextProvider> = ({
	children,
}) => {
	const [pins, setPins] = useState<IPin[]>([])

	return (
		<PinContext.Provider value={{ pins, setPins }}>
			{children}
		</PinContext.Provider>
	)
}
