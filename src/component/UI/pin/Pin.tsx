import { PinObject } from '../../../type/IPin'
import { ImagePreview } from '../../subcomponent/ImagePreview/ImagePreview'

import styles from './Post.module.scss'

export const Post: React.FC<PinObject> = ({ pin, stackPins }) => {
	return (
		<>
			{stackPins ? (
				<ImagePreview stackPins={stackPins} file={pin.image} />
			) : (
				<>
					<ImagePreview file={pin.image} />
					<div className={styles.post}>
						<h3>{pin.title}</h3>
						<p>{pin.body}</p>
					</div>
				</>
			)}
		</>
	)
}
