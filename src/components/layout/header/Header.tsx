import { Link, useLocation } from 'react-router-dom'
import styles from '../index.module.scss'
import { headerLinks } from './header-links.ts'

const Header = () => {
	const location = useLocation()

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					{headerLinks.map((link, i) => {
						if (typeof link === 'string') {
							return null
						}

						const isActive = location.pathname === link.path
						return (
							<Link
								to={link.path}
								key={i}
								className={`${headerLinks.slice(-1).join('')} ${isActive ? 'text-blue-700' : ''}`}
							>
								{link.title}
							</Link>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}

export default Header
