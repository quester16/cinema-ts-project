import Bookings from '../pages/bookings/Bookings.tsx'
import Home from '../pages/home/Home.tsx'
import Movies from '../pages/movies/Movies.tsx'
import Profile from '../pages/profile/Profile.tsx'
import SingleMovie from '../pages/single-movie/SingleMovie.tsx'

export const routes = [
	{
		path: '/',
		element: Home,
		isAuth: false
	},
	{
		path: '/movies',
		element: Movies,
		isAuth: false
	},
	{
		path: '/profile',
		element: Profile,
		isAuth: true
	},
	{ path: '/movies/:movieId', element: SingleMovie, isAuth: false },
	{
		path: '/bookings',
		element: Bookings,
		isAuth: true
	}
]
