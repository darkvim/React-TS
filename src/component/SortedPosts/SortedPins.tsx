import { ISortedPins } from '../../type/ISortedPins'

import { motion } from 'framer-motion'
import { Post } from '../UI/pin/Pin'

import styles from './SortedPosts.module.scss'
import { useState } from 'react'
import { ToggleSpans } from '../UI/toggle_menu/span/ToggleSpans'

export const SortedPosts: React.FC<ISortedPins> = ({
	sortedPins,
	showNotFoundMessage,
}) => {
	const [stackPins, setStackPins] = useState<boolean>(true)
	const [stackToggle, setStackToggle] = useState<boolean>(true)

	const ulStack = styles.ulStack
	const ulList = styles.ulList

	const pinList = styles.postList
	const pinStack = styles.postStack

	return (
		<>
			<div className={styles.toggleMenu}>
				<ToggleSpans
					onClick={() => {
						setStackPins(true)
						setStackToggle(true)
					}}
					className={stackToggle ? styles.active : ''}
					text='Stack'
				/>
				<ToggleSpans
					onClick={() => {
						setStackPins(false)
						setStackToggle(false)
					}}
					className={stackToggle ? '' : styles.active}
					text='List'
				/>
			</div>
			<ul className={stackPins ? ulStack : ulList}>
				{sortedPins && sortedPins.length !== 0 ? (
					sortedPins.map(pin => (
						<motion.li
							className={stackPins ? pinStack : pinList}
							key={pin.id}
							initial={{ scale: 0, y: 10 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -10 }}
							whileHover={{ scale: 1.05, cursor: 'pointer' }}
							transition={{ duration: 0.3 }}
						>
							<Post stackPins={stackPins} pin={pin} key={pin.id} />
						</motion.li>
					))
				) : showNotFoundMessage ? (
					<h1 style={{ textAlign: 'center' }}>No posts</h1>
				) : null}
			</ul>
		</>
	)
}
