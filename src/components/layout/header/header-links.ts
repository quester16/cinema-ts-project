type HeaderLinks = {
	path: string
	title: string
}

type linksArray = (HeaderLinks | string)[]

export const headerLinks: linksArray = [
	{
		path: '/',
		title: 'Home'
	},
	{
		path: '/movies',
		title: 'Movies'
	},
	{
		path: '/profile',
		title: 'Profile'
	},
	'hover:opacity-65 transition-opacity ease duration-150'
]
