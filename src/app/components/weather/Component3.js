import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { objToArray } from "@/app/utility/functions";
import WeatherIcon from "../WeatherIcon";

function Week({ daysOfWeek }) {
	return (
		<ul className="flex">
			{objToArray(daysOfWeek).map((day) => {
				return (
					<li
						key={day.key}
						className="border-2 text-white list-none flex flex-col items-center space-y-2 w-[100px]">
						<p className="uppercase">{day["key"]}</p>
						<div className="w-[60px] h-[60px] relative">
							<WeatherIcon weatherType={day.type} size={"big"} />
						</div>
						<p>
							<span>{day.degree}</span>
							<span>°C</span>
						</p>
					</li>
				);
			})}
		</ul>
	);
}

//Gallery kaynak kodu: `https://react.dev/learn/manipulating-the-dom-with-refs`
function Gallery({ itemList }) {
	const selectedRef = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<nav>
				<button
					onClick={() => {
						flushSync(() => {
							if (index < itemList.length - 1) {
								setIndex(index + 1);
							} else {
								setIndex(0);
							}
						});
						selectedRef.current.scrollIntoView({
							behavior: "smooth",
							block: "nearest",
							inline: "center",
						});
					}}>
					Next
				</button>
			</nav>
			<div>
				<ul>
					{itemList.map((item, i) => (
						<li key={item.id} ref={index === i ? selectedRef : null}>
							<img
								className={index === i ? "active" : ""}
								src={item.imageUrl}
								alt={"Cat #" + item.id}
							/>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default function Component3({ weeklyWeather }) {
	return;

	return <Week daysOfWeek={weeklyWeather.previous} />;
}
