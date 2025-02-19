import { createContext, useContext } from 'react'
import { IPinContext } from '../../type/context/IPinContextProvider'

export const PinContext = createContext<IPinContext | null>(null)

export const usePinContext = () => {
	const context = useContext(PinContext)
	if (!context)
		throw new Error('usePinContext must be use within a PinContextProvider')
	return context
}
