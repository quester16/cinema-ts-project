import { FC } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
	title: string
	variant: 'primary' | 'secondary'
	behavior: 'link' | 'btn'
	path?: string
	blank?: boolean
}

const Button: FC<ButtonProps> = ({
	title,
	variant,
	behavior,
	path = '',
	blank
}) => {
	let btnClass =
		'p-2 text-white rounded-md hover:opacity-85 transition-opacity ease duration-200 '

	btnClass += variant === 'primary' ? 'bg-blue-500' : 'border border-blue-500'

	if (behavior === 'btn') return <button className={btnClass}>{title}</button>
	else if (blank)
		return (
			<Link
				className={btnClass}
				to={path}
				target="_blank"
				rel="noopener noreferrer"
			>
				{title}
			</Link>
		)
	else
		return (
			<Link className={btnClass} to={path}>
				{title}
			</Link>
		)
}

export default Button
