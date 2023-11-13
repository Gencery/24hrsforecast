"use client";
import useFetch from "./hooks/useFetch";

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
			<Component0
				place={data.city}
				weatherType={data.type}
				temperature={data.degree}
				date={data.date}
			/>
			<Component1 />
			<Component2 />
			<Component3 />
			<Component4 />
			<Component5 />
		</div>
	);
}
