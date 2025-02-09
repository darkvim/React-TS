import { IPost } from '../type/IPost'
import { ISelect } from '../type/ISelect'

export const Select: React.FC<ISelect> = ({ setSortField, options }) => {
	return (
		<select onChange={event => setSortField(event.target.value as keyof IPost)}>
			{options.map(opt => (
				<option value={opt.value}>{opt.text}</option>
			))}
		</select>
	)
}
