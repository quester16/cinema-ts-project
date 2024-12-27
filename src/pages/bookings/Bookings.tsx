import Button from '../../components/ui/button/Button.tsx'

const Bookings = () => {
	return (
		<div className="w-full h-dvh bg-gray-800 pt-10 ">
			<div className="w-[800px] bg-gray-200 rounded-md mx-auto ">
				<div className="font-medium text-lg capitalize ml-2">Movie name</div>
				<div className="bg-gray-100  pb-3">
					<div className="text-center font-medium">25 of Month </div>
					<div className="text-center overflow-x-auto  py-4 ">
						<div className="flex flex-nowrap gap-x-2 cursor-pointer justify-center ">
							<div className="flex flex-col items-center border border-dashed border-gray-200 rounded-md w-fit bg-blue-400 px-2 m-0">
								<small>14:40</small>
								<small>
									<strong>40$</strong>
								</small>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center ">
						<svg width="400" height="70" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M 0 35 Q 250 0 500 50 L 500 0 "
								fill="url(#gradient)"
								stroke="#8169e3"
								strokeWidth="2"
							/>
						</svg>
						<div className="w-[430px] flex flex-wrap gap-6 ">
							{Array.from({ length: 40 }).map((_, i) => (
								<img
									src="/seats.png"
									alt="seats"
									key={i}
									className="cursor-pointer"
								/>
							))}
						</div>
					</div>
					<div className="flex p-2 bg-white w-fit rounded-md my-5 mx-auto text-gray-600 gap-x-6">
						<div className="flex items-center justify-center gap-2">
							<img src="/seats.png" className="h-8" />
							<div className="flex flex-col ">
								<strong className="text-sm">20</strong>
								<span className="text-xs font-medium">Free</span>
							</div>
						</div>
						<div className="flex items-center justify-center gap-2">
							<img src="/booked.png" className="h-8" />
							<div className="flex flex-col ">
								<strong className="text-sm">20</strong>
								<span className="text-xs font-medium">Booked</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex  p-4 justify-between">
					<div className="flex gap-x-4">
						<img src="/ticket.png" alt="ticket" className="h-[50px]" />
						<div>
							<div className="flex gap-2 text-sm">
								<div className="text-gray-500">Amount:</div>
								<div>1 pcs.</div>
							</div>
							<div className="flex gap-2 text-sm">
								<div className="text-gray-500">Total cost:</div>
								<div>50$</div>
							</div>
						</div>
					</div>
					<Button title={'Order'} variant={'primary'} behavior={'btn'} />
				</div>
			</div>
		</div>
	)
}

export default Bookings
