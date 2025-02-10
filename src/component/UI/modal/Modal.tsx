import { IModal } from '../../../type/IModal'

import styles from './Modal.module.scss'

export const Modal: React.FC<IModal> = ({ children }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}>{children}</div>
		</div>
	)
}
