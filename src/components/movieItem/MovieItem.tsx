import { Link } from 'react-router-dom'

const MovieItem = () => {
	return (
		<Link
			to={'/movies/1'}
			className="flex flex-col p-1 w-[322px] h-[200px] cursor-pointer "
		>
			<div className="rounded-md w-[300px] h-[150px] overflow-hidden">
				<img
					className="object-cover w-full h-full rounded-md hover:scale-105 transition ease duration-200 "
					src="/moana2.jpg"
					alt="moana2"
				/>
			</div>
			<div className="font-semibold " style={{ letterSpacing: '1px' }}>
				Title
			</div>
			<div className="text-gray-600">Comedy, Drama</div>
		</Link>
	)
}

export default MovieItem
