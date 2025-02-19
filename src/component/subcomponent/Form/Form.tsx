import { useState } from 'react'
import { IForm } from '../../../type/IForm'
import { IPin } from '../../../type/IPin'
import { Button } from '../../UI/button/Button'
import { Input } from '../../UI/input/Input'
import styles from './Form.module.scss'

export const Form: React.FC<IForm> = ({ setPins, setVisible }) => {
	const [pin, setPin] = useState<IPin>({
		id: Date.now(),
		title: '',
		body: '',
		image: null,
	})

	const addNewPost = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setPins(prev => [...prev, pin])
		setPin({ id: Date.now(), title: '', body: '', image: null })
		setVisible(false)
	}

	return (
		<form className={styles.form} onSubmit={addNewPost}>
			<Input
				placeholder='Post title'
				onChange={e => setPin({ ...pin, title: e.target.value })}
				value={pin.title}
				type='text'
			/>

			<Input
				placeholder='Post description'
				onChange={e => setPin({ ...pin, body: e.target.value })}
				value={pin.body}
				type='text'
			/>

			<div>
				<label htmlFor='file'>Set post image</label>
			</div>
			<Input
				onChange={e => setPin({ ...pin, image: e.target.files?.[0] })}
				type='file'
				name='file'
				id='file'
			/>

			<Button type='submit' text='Create post' />
		</form>
	)
}
