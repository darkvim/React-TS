
import { IInput } from '../../../type/IInput'
import { Input } from '../../UI/input/Input'
import styles from './SearchSection.module.scss'

export const SearchSection: React.FC<IInput> = ({ setSearchQuery }) => {
	return (
		<section className={styles.inputSection}>
			<Input placeholder='Search' setSearchQuery={setSearchQuery} />
			<span>SEARCH-ICON</span>
		</section>
	)
}
