import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home.tsx'

import { routes } from './routes-data.ts'

const Router: FC = () => {
	const isAuth = true

	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, index) => {
					if (route.isAuth && !isAuth) return false
					return (
						<Route key={index} path={route.path} element={<route.element />} />
					)
				})}
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
