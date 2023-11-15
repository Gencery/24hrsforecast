import Image from "next/image";
export default function Component4({
	time,
	realFeel,
	wind,
	chanceOfRain,
	uvIndex,
}) {
	return (
		<div className="box sm:ml-4 my-4 sm:my-0 p-4 space-y-2 text-white h-fit">
			<p className="flex items-center text-[32px]">
				<span>
					<Image
						src={"/assets/img/icons/miscellaneous/Clock.png"}
						width={30}
						height={25}
						alt="Clock"
					/>
				</span>
				<span>{time}</span>
			</p>
			<p className="text-[32px]">AIR CONDITIONS</p>
			<div className="min-w-[300px] flex flex-wrap items-center justify-center space-y-6">
				{/* Real Feel */}
				<div className="w-[45%] h-[100px] flex items-center space-x-2">
					<Image
						src={"/assets/img/icons/miscellaneous/temp.png"}
						width={50}
						height={65}
						alt="real feel temperature"
					/>
					<p className="flex flex-col">
						<span>Real Feel</span>
						<span>{realFeel + "°"}</span>
					</p>
				</div>
				{/* Wind */}
				<div className="w-[45%] h-[100px] flex items-center space-x-2">
					<Image
						src={"/assets/img/icons/miscellaneous/wind2.png"}
						width={50}
						height={65}
						alt="wind"
					/>
					<p className="flex flex-col">
						<span>Wind</span>
						<span>{wind + "km/hr"}</span>
					</p>
				</div>
				{/* Chance Of Rain */}
				<div className="w-[45%] h-[100px] flex items-center space-x-2">
					<Image
						src={"/assets/img/icons/miscellaneous/waterDrop.png"}
						width={50}
						height={65}
						alt="water drop"
					/>
					<p className="flex flex-col">
						<span>Chance of rain</span>
						<span>{chanceOfRain + "%"}</span>
					</p>
				</div>
				{/* UV Index */}
				<div className="w-[45%] h-[100px] flex items-center space-x-2">
					<Image
						src={"/assets/img/icons/weather/big/sunny.png"}
						width={50}
						height={65}
						alt="sun"
					/>
					<p className="flex flex-col">
						<span>UV Index</span>
						<span>{uvIndex}</span>
					</p>
				</div>
			</div>
		</div>
	);
}
