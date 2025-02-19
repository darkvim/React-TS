import { IInput } from '../../../type/IInput'
import styles from './Input.module.scss'

export const Input: React.FC<IInput> = ({
	setSearchQuery,
	onChange,
	...props
}) => {
	return (
		<input
			className={styles.input}
			{...props}
			onChange={e => {
				if (setSearchQuery) setSearchQuery(e.target.value)
				if (onChange) onChange(e)
			}}
		/>
	)
}
