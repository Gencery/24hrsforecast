import Image from "next/image";
export default function WeatherIcon({ weatherType, size }) {
	let fileLocation = "/assets/img/icons/weather/";

	let weatherIcon = {
		"sunny cloudy": "/sunnyCloudy.png",
		sunny: "/sunny.png",
		rainy: "/rainy.png",
		"sunny rainy": "/sunnyRainy.png",
		thunder: "/thunder.png",
		clear: "/clear.png",
		"cloudy night": "/cloudyNight.png",
		"thunder night": "/thunderNight.png",
		"thunder night 2": "/thunderNight2.png",
	};

	return (
		<Image
			src={fileLocation + size + weatherIcon[weatherType]}
			alt={weatherType}
			layout="fill"
		/>
	);
}
