import Image from "next/image";

export default function Component1() {
	return (
		<div className="box p-2 flex flex-col justify-center items-center space-y-2">
			<div className="">
				<Image
					src={"/assets/img/logo.png"}
					width={100}
					height={100}
					alt="logo"
				/>
				<p className="text-white"></p>
			</div>
			<a className="">
				<Image
					src={"/assets/img/icons/weather/big/sunnyRainy.png"}
					width={100}
					height={100}
					alt="logo"
				/>
				<p className="text-white">Weather</p>
			</a>
			<a className="">
				<Image
					src={"/assets/img/icons/miscellaneous/Explore.png"}
					width={50}
					height={50}
					alt="logo"
				/>
				<p className="text-white">Explore</p>
			</a>
			<a className="">
				<Image
					src={"/assets/img/icons/miscellaneous/Location.png"}
					width={50}
					height={50}
					alt="logo"
				/>
				<p className="text-white">Location</p>
			</a>
			<a className="">
				<Image
					src={"/assets/img/icons/miscellaneous/Settings.png"}
					width={50}
					height={50}
					alt="logo"
				/>
				<p className="text-white">Settings</p>
			</a>
		</div>
	);
}
