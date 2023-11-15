"use client";
import { objToArray } from "@/app/utility/functions";
import WeatherIcon from "../WeatherIcon";
import { useState } from "react";

function Week({ daysOfWeek }) {
	return (
		<ul className="flex justify-between">
			{objToArray(daysOfWeek).map((day) => {
				return (
					<li
						key={day.key}
						className="text-white list-none flex flex-col items-center space-y-2 m-0.25">
						<p className="uppercase text-[8px] md:text-[16px]">{day["key"]}</p>
						<div className="w-[35px] h-[25px] md:w-[60px] md:h-[50px] relative">
							<WeatherIcon weatherType={day.type} size={"big"} />
						</div>
						<p className="text-[14px] md:text-[16px]">
							<span>{day.degree}</span>
							<span>°C</span>
						</p>
					</li>
				);
			})}
		</ul>
	);
}

function Gallery({ children }) {
	const [index, setIndex] = useState(1);

	function handlePrevSlide() {
		if (index == 0) {
			setIndex(children.length - 1);
		} else {
			setIndex(index - 1);
		}
	}
	function handleNextSlide() {
		if (index == children.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	}

	let weeks = ["Previous Week", "Current Week", "Next Week"];

	return (
		<div className="text-white">
			<div className="flex">
				<button className="mr-1" onClick={handlePrevSlide}>
					{"❮"}
				</button>
				<div className="grow">{children[index]}</div>
				<button className="ml-1" onClick={handleNextSlide}>
					{"❯"}
				</button>
			</div>
			<p className="text-center my-2">{weeks[index]}</p>
		</div>
	);
}

export default function Component3({ weeklyWeather }) {
	return (
		<div className="box ml-0 xl:ml-4 my-4 p-4 space-y-2">
			<Gallery>
				<Week daysOfWeek={weeklyWeather.previous} />
				<Week daysOfWeek={weeklyWeather.current} />
				<Week daysOfWeek={weeklyWeather.next} />
			</Gallery>
		</div>
	);
}
