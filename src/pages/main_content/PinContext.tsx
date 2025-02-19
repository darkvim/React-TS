import { useCallback, useEffect, useRef, useState } from 'react'
import { usePinContext } from '../../component/context/PinContext'
import { SortedSection } from '../../component/SortedPosts/SortedSection'
import { SearchSection } from '../../component/subcomponent/SearchSection/SearchSection'
import { Button } from '../../component/UI/button/Button'
import { Hr } from '../../component/UI/hr/Hr'
import { Modal } from '../../component/UI/modal/Modal'
import { getAllImages } from '../../service/temp'
import { body, title } from '../../variables/variables'
import { Form } from '../../component/subcomponent/Form/Form'

export const PinPage: React.FC = () => {
	const { pins, setPins } = usePinContext()

	const [searchQuery, setSearchQuery] = useState<string>('')
	const [visible, setVisible] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)

	const observer = useRef<IntersectionObserver | null>(null)
	const [images, setImages] = useState<File[]>([])
	const [page, setPage] = useState<number>(1)

	useEffect(() => {
		const fetchAllImages = async () => {
			setLoading(true)
			const data = await getAllImages()
			setImages(data)
			setLoading(false)
		}
		fetchAllImages()
	}, [])

	useEffect(() => {
		if (images.length === 0) return

		setLoading(true)

		setPins(prevPins => {
			const newPins = images
				.slice(prevPins.length, prevPins.length + 10)
				.map((file, index) => ({
					id: Date.now() + index,
					body: body,
					title: title,
					image: file,
				}))

			return [...prevPins, ...newPins]
		})
		setLoading(false)
	}, [images, page])

	const lastPostRef = useCallback(
		(node: HTMLDivElement | null) => {
			if (loading) return
			if (observer.current) observer.current.disconnect()

			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting) setPage(prev => prev + 1)
			})

			if (node) observer.current.observe(node)
		},
		[loading]
	)

	return (
		<>
			<SearchSection setSearchQuery={setSearchQuery} />
			<Button
				style={{
					display: 'flex',
					justifyContent: 'center',
					width: '200px',
					margin: 'auto',
				}}
				onClick={() => setVisible(!visible)}
				text='Create post'
			/>
			<Hr />
			<Modal visible={visible} setVisible={setVisible}>
				<Form setPins={setPins} setVisible={setVisible} />
			</Modal>
			<SortedSection pins={pins} searchQuery={searchQuery} />
			<div
				ref={lastPostRef}
				style={{ height: '20px', background: 'transparent' }}
			/>
			{loading && <p>Loading more posts...</p>}
		</>
	)
}
