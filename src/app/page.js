"use client";
import useFetch from "./hooks/useFetch";
import Image from "next/image";
import Component0 from "./components/weather/Component0";
import Component1 from "./components/weather/Component1";
import Component2 from "./components/weather/Component2";
import Component3 from "./components/weather/Component3";
import Component4 from "./components/weather/Component4";
import Component5 from "./components/weather/Component5";

export default function Home() {
	//simulate fetching from an api
	const data = useFetch("/assets/data/data.json");

	return (
		<div>
			<div className="flex flex-col lg:flex-row m-4 border-2">
				<Component0
					place={data.city}
					weatherType={data.type}
					temperature={data.degree}
					date={data.date}
				/>
				<div className="flex flex-col border-2 items-center flex-grow">
					<Image
						src={"/Assets/img/logoLong.png"}
						width={275}
						height={60}
						alt="maple software logo"
					/>
					<Component5 />
				</div>
			</div>
			<div className="border-2 flex flex-col sm:flex-row m-4">
				<Component1 />
				<div>
					<Component2 />
					{data.weeklyWeather && (
						<Component3 weeklyWeather={data.weeklyWeather} />
					)}
				</div>

				{data.date && data.airConditions && (
					<Component4
						time={data.date.split(" : ")[1]}
						realFeel={data.airConditions.split("::")[0]}
						wind={data.airConditions.split("::")[2]}
						chanceOfRain={data.airConditions.split("::")[1]}
						uvIndex={data.airConditions.split("::")[3]}
					/>
				)}
			</div>
		</div>
	);
}
