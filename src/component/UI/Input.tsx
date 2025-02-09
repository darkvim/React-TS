import { IInput } from '../../type/IInput'

export const Input: React.FC<IInput> = ({ setSearchQuery }) => {
	return (
		<input
			type='search'
			placeholder='search'
			onChange={event => setSearchQuery(event.target.value)}
		/>
	)
}
