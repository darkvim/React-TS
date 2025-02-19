import { IPin } from '../IPin'

export interface IPinPreview {
	setPins: React.Dispatch<React.SetStateAction<IPin[]>>
	setVisible: React.Dispatch<React.SetStateAction<boolean>>
}
