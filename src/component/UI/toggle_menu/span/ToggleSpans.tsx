export const ToggleSpans: React.FC<IToggleSpan> = ({ text, ...props }) => {
	return <span {...props}>{text}</span>
}

interface IToggleSpan extends React.ComponentProps<'span'> {
	text?: string
}
