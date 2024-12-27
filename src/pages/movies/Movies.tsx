import Layout from '../../components/layout/Layout.tsx'
import MovieItem from '../../components/movieItem/MovieItem.tsx'

const Movies = () => {
	return (
		<Layout>
			<div className="flex flex-wrap gap-4 w-full px-2 ">
				<MovieItem />
				<MovieItem />
				<MovieItem />
				<MovieItem />
				<MovieItem />
			</div>
		</Layout>
	)
}

export default Movies
