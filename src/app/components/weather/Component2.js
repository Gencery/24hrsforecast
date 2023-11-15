import Image from "next/image";

export default function Component2() {
	let url = "/assets/img/activityLocations/";

	return (
		<div className="box sm:ml-4 my-4 sm:my-0 p-4 space-y-2">
			<div className="text-white flex">
				<Image
					src="/assets/img/icons/miscellaneous/Heart.png"
					alt="like"
					width={20}
					height={20}
				/>
				<span>Activities in your area</span>
			</div>
			{/* Activities */}
			<div className="flex space-x-4 p-2 overflow-x-auto sm:max-w-[50vw] max-w-[100vw]">
				<a className="min-w-[100px] sm:min-w-[200px]">
					<img
						src={url + "location-1.png"}
						alt="a picture of forest in spring"
						className="max-h-full"
					/>
				</a>
				<a className="min-w-[100px] sm:min-w-[200px]">
					<img
						src={url + "location-2.png"}
						alt="a picture of forest in autumn"
						className="max-h-full"
					/>
				</a>
				<a className="min-w-[100px] sm:min-w-[200px]">
					<img
						src={url + "location-3.png"}
						alt="a swimming pool with slides"
						className="max-h-full"
					/>
				</a>
				<a className="min-w-[100px] sm:min-w-[200px]">
					<img
						src={url + "location-4.png"}
						alt="a beach in summer"
						className="max-h-full"
					/>
				</a>
			</div>
		</div>
	);
}
