import Image from "next/image";
import WeatherIcon from "../WeatherIcon";
import { loading } from "@/app/utility/loading";

export default function Component0({ place, weatherType, temperature, date }) {
	//json date verisini tasarımdakine çevirir
	let formattedDate = new Date(date).toLocaleDateString("en-GB", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	formattedDate = formattedDate.split(",");

	return (
		<div className="text-white flex flex-col xl:flex-row border-2 items-center justify-around space-x-2 space-y-2 p-2">
			{/*Location - Weather - Temperature */}
			<div className="flex flex-col w-fit justify-center items-center p-4">
				{/*Location*/}
				<div>
					<p className="flex items-center w-fit">
						<Image
							src="/assets/img/icons/miscellaneous/Location.png"
							width={40}
							height={40}
							alt="location"
						/>
						<span className="text-2xl whitespace-nowrap">
							{loading(place, place)}
						</span>
					</p>
				</div>
				{/*Weather*/}
				<div>
					<p className="text-3xl capitalize">
						{loading(weatherType, weatherType)}
					</p>
				</div>
				{/*Temperature*/}
				<p className="text-[64px] whitespace-nowrap	">
					{loading(temperature, temperature)}
					<span>°C</span>
				</p>
			</div>
			{/*Current Temperature Icon */}
			<div className="relative w-[75px] h-[75px] sm:w-[125px] sm:h-[125px] md:w-[175px] md:h-[175px]">
				<WeatherIcon weatherType={weatherType} size="big" />
			</div>
			{/*Date*/}
			<div>
				<p className="sm:text-[40px] text-[25px]">
					<span className="whitespace-nowrap">
						{loading(date, formattedDate[0])}
					</span>
					<span className="animate-spin"> | </span>
					<span className="whitespace-nowrap">
						{loading(date, formattedDate[1])}
					</span>
				</p>
			</div>
		</div>
	);
}
