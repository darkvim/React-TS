import { IPost } from '../type/IPost'
import { ISelect } from '../type/ISelect'

export const Select: React.FC<ISelect> = ({ setSortField, options }) => {
	return (
		<select onChange={event => setSortField(event.target.value as keyof IPost)}>
			{options &&
				options.map(opt => (
					<option key={opt.value} value={opt.value}>
						{opt.text}
					</option>
				))}
		</select>
	)
}
