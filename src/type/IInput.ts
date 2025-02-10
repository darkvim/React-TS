export interface IInput extends React.ComponentProps<'input'> {
	setSearchQuery?: React.Dispatch<React.SetStateAction<string>>
}
