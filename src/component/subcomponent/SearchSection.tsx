import { IInput } from '../../type/IInput'
import { ISelect } from '../../type/ISelect'
import { Input } from '../UI/input/Input'
import { Select } from './Select'

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

			<Input placeholder='Search' setSearchQuery={setSearchQuery} />
		</section>
	)
}
