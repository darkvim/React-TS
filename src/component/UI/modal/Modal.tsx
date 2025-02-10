import { IModal } from '../../../type/IModal'

import styles from './Modal.module.scss'

export const Modal: React.FC<IModal> = ({ children, visible, setVisible }) => {
	const rootClasses = [styles.modal]
	if (visible) rootClasses.push(styles.active)

	return (
		<div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
			<div
				onClick={event => event.stopPropagation()}
				className={styles.modalContent}
			>
				{children}
			</div>
		</div>
	)
}
