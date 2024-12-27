import { FC } from 'react'
import Header from './header/Header.tsx'
import styles from './index.module.scss'

interface LayoutProps {
	children?: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<div className={styles.layout}>{children}</div>
		</>
	)
}

export default Layout
