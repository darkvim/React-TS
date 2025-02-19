import { useEffect, useState } from 'react'
import { IImavePreview } from '../../../type/IImagePreview'

import styles from './ImagePreview.module.scss'

export const ImagePreview: React.FC<IImavePreview> = ({ file, stackPins }) => {
	const [preview, setPreview] = useState<string | null>(null)

	useEffect(() => {
		if (!file) return

		const objectUrl = URL.createObjectURL(file)
		setPreview(objectUrl)

		return () => URL.revokeObjectURL(objectUrl)
	}, [file])

	if (!preview) return null

	return (
		<img
			className={stackPins ? styles.imageStack : styles.imageList}
			src={preview}
			alt='icon'
		/>
	)
}
