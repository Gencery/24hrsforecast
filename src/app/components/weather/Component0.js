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
	formattedDate = formattedDate.replace(",", " | ");

	return (
		<div className="text-white m-2 flex border-2 items-center justify-around">
			{/*Location - Weather - Temperature */}
			<div className="flex flex-col w-fit p-2 justify-center items-center space-y-2">
				{/*Location*/}
				<div>
					<p className="flex items-center w-fit">
						<Image
							src="/assets/img/icons/miscellaneous/Location.png"
							width={40}
							height={40}
							alt="location"
						/>
						<span className="text-2xl">{loading(place, place)}</span>
					</p>
				</div>
				{/*Weather*/}
				<div>
					<p className="text-3xl capitalize">
						{loading(weatherType, weatherType)}
					</p>
				</div>
				{/*Temperature*/}
				<p className="text-[64px]">
					{loading(temperature, temperature)} <span>°C</span>
				</p>
			</div>
			{/*Current Temperature Icon */}
			<div className="relative w-[200px] h-[200px]">
				<WeatherIcon weatherType={weatherType} size="big" />
			</div>
			{/*Date*/}
			<div>
				<p className="text-[40px]">{loading(date, formattedDate)}</p>
			</div>
		</div>
	);
}
