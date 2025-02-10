import { useEffect, useState } from 'react'

import styles from './ImagePreview.module.scss'
import { IImavePreview } from '../../../type/IImagePreview'

export const ImagePreview: React.FC<IImavePreview> = ({ file, stackPosts }) => {
	const [preview, setPreview] = useState<string | null>(null)

	const imageList = styles.imageList
	const imageStack = styles.imageStack

	useEffect(() => {
		if (!file) return

		const objectUrl = URL.createObjectURL(file)
		setPreview(objectUrl)

		return () => URL.revokeObjectURL(objectUrl)
	}, [file])

	if (!file) return null

	return (
		<img
			className={stackPosts ? imageStack : imageList}
			src={preview!}
			alt='icon'
		/>
	)
}
