import { IInput } from '../type/IInput'
import { ISelect } from '../type/ISelect'
import { Select } from './Select'
import { Input } from './UI/Input'

export const SearchSection: React.FC<ISelect & IInput> = ({
	setSortField,
	setSearchQuery,
}) => {
	return (
		<section>
			<Select
				setSortField={setSortField}
				options={[
					{ value: 'title', text: 'По заголовку' },
					{ value: 'body', text: 'По описанию' },
				]}
			/>

			<Input setSearchQuery={setSearchQuery} />
		</section>
	)
}
