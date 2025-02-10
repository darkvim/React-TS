import { ReactNode } from 'react'

export interface IModal {
	children: ReactNode
	visible: boolean
	setVisible: React.Dispatch<React.SetStateAction<boolean>>
}
