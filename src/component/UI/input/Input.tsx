import { IInput } from '../../../type/IInput'

export const Input: React.FC<IInput> = ({
	setSearchQuery,
	onChange,
	...props
}) => {
	return (
		<input
			{...props}
			onChange={e => {
				if (setSearchQuery) setSearchQuery(e.target.value)
				if (onChange) onChange(e)
			}}
		/>
	)
}
