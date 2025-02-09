import { useEffect, useState } from 'react'

export const ImagePreview = ({ file }: { file: File | null | undefined }) => {
	const [preview, setPreview] = useState<string | null>(null)

	useEffect(() => {
		if (!file) return

		const objectUrl = URL.createObjectURL(file)
		setPreview(objectUrl)

		return () => URL.revokeObjectURL(objectUrl)
	}, [file])

	if (!file) return <p>No image</p>

	return <img src={preview!} alt='icon' />
}
