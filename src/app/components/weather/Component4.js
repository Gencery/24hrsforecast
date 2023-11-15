import Image from "next/image";
export default function Component4({
	time,
	realFeel,
	wind,
	chanceOfRain,
	uvIndex,
}) {
	return (
		<div className="box sm:ml-4 my-4 sm:my-0 p-4 space-y-2 text-white">
			<p>
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
			<p>AIR CONDITIONS</p>
			<div className="border-2 min-w-[350px] flex flex-wrap">
				{/* Real Feel */}
				<div className="w-[150px]">
					<Image
						src={"/assets/img/icons/miscellaneous/temp.png"}
						width={55}
						height={65}
						alt="real feel temperature"
					/>
					<p className="flex flex-col">
						<span>Real Feel</span>
						<span>{realFeel + "°"}</span>
					</p>
				</div>
				{/* Wind */}
				<div>
					<Image
						src={"/assets/img/icons/miscellaneous/wind.png"}
						width={55}
						height={65}
						alt="wind"
					/>
					<p className="flex flex-col">
						<span>Wind</span>
						<span>{wind + "km/hr"}</span>
					</p>
				</div>
				{/* Chance Of Rain */}
				<div>
					<Image
						src={"/assets/img/icons/miscellaneous/waterDrop.png"}
						width={55}
						height={65}
						alt="water drop"
					/>
					<p className="flex flex-col">
						<span>Chance of rain</span>
						<span>{chanceOfRain + "%"}</span>
					</p>
				</div>
				{/* UV Index */}
				<div>
					<Image
						src={"/assets/img/icons/weather/big/sunny.png"}
						width={55}
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
