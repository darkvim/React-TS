import React, { SetStateAction } from 'react'
import { IPin } from './IPin'

export interface IForm extends React.ComponentProps<'form'> {
	setPins: React.Dispatch<SetStateAction<IPin[]>>
	setVisible: React.Dispatch<SetStateAction<boolean>>
}
