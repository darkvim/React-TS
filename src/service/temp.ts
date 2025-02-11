import { urlToFile } from './UrlToFile'

export const getAllImages = async (): Promise<File[]> => {
	let start = 1
	const finish = 130
	const filesArray: File[] = []

	while (start < finish) {
		try {
			const file = await urlToFile({
				url: `/images/temp/${start}.jpg`,
				fileName: `${start}.jpg`,
				mimeType: 'image/jpeg',
			})
			filesArray.push(file)
		} catch (error) {
			console.error(`Не удалось загрузить изображение ${start}.jpg`, error)
		}
		start++
	}

	return filesArray
}
