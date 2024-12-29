import Layout from '../../components/layout/Layout.tsx'
import Button from '../../components/ui/button/Button.tsx'
import { useGetPopularQuery } from '../../redux/api/booking.api.ts'

const SingleMovie = () => {
	const { data } = useGetPopularQuery()

	console.log(data)

	return (
		<Layout>
			<div className="w-full px-2 mt-9">
				<div className="text-3xl font-semibold capitalize">Moana 2</div>
				<div className="w-[700px] h-[600px] overflow-hidden my-3">
					<img
						src="/moana2.jpg"
						alt="moana"
						className="object-cover object-center w-full h-full rounded-md"
					/>
				</div>
				<div className="w-[700px]">
					<div className="flex justify-between gap-x-4">
						<div className="flex-[25%] text-gray-500">actor</div>
						<div className="flex-[75%] font-medium capitalize">actor name</div>
					</div>
					<div className="flex justify-between gap-x-4">
						<div className="flex-[25%] text-gray-500">genre</div>
						<div className="flex-[75%] font-medium">comedy, drama</div>
					</div>
				</div>
				<div className="my-12">
					<div className="font-medium mb-4">Description</div>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
						asperiores consequatur dolorum est inventore laudantium odio,
						repellat similique. A consequatur, dolor dolores facere iure laborum
						minima nemo nulla quidem quis repellendus ut voluptas voluptatibus?
						Dolore ipsam minus quas quia totam.
					</div>
				</div>
				<Button
					title={'Order a place'}
					variant={'primary'}
					behavior="link"
					path={'/bookings'}
					blank={true}
				/>
			</div>
		</Layout>
	)
}

export default SingleMovie
