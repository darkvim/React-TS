import { useMemo } from 'react'
import { ISortedSection } from '../../type/ISortedSection'
import { SortedPosts } from './SortedPins'

export const SortedSection: React.FC<ISortedSection> = ({
	pins,
	searchQuery,
}) => {
	const sortedAndSearchedPins = useMemo(() => {
		if (searchQuery)
			return [...pins].filter(post =>
				post.title.toLowerCase().includes(searchQuery)
			)
		else return []
	}, [searchQuery, pins])

	return (
		<section>
			{sortedAndSearchedPins.length !== 0 ? (
				<SortedPosts
					sortedPins={sortedAndSearchedPins}
					showNotFoundMessage={false}
				/>
			) : null}

			<SortedPosts showNotFoundMessage sortedPins={pins} />
		</section>
	)
}
