import { IButton } from '../../../type/IButton'

import styles from './Button.module.scss'

export const Button: React.FC<IButton> = ({ text, ...props }) => {
	return (
		<button className={styles.button} {...props}>
			{text}
		</button>
	)
}
