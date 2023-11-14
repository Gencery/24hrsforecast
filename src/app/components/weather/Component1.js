import Image from "next/image";

export default function Component1() {
	return (
		<div className="box p-0 sm:p-6 flex sm:flex-col flex-row w-full sm:w-fit justify-center items-center space-y-2 flex-wrap">
			<div className="w-full space-y-2 flex flex-col justify-end items-center sm:w-[125px] h-[125px]">
				<Image
					src={"/assets/img/logo.png"}
					width={100}
					height={100}
					alt="logo"
				/>
				<p className="text-white"></p>
			</div>
			<a
				href="/"
				className="space-y-2 flex flex-col justify-end items-center w-[125px] h-[125px]">
				<Image
					src={"/assets/img/icons/weather/big/sunnyRainy.png"}
					width={100}
					height={100}
					alt="logo"
				/>
				<p className="text-white">Weather</p>
			</a>
			<a
				href="/explore"
				className="space-y-2 flex flex-col justify-end items-center w-[125px] h-[125px]">
				<Image
					src={"/assets/img/icons/miscellaneous/Explore.png"}
					width={50}
					height={50}
					alt="logo"
					className="hover:scale-150 hover:cursor-pointer"
				/>
				<p className="text-white">Explore</p>
			</a>
			<a
				href="/location"
				className="space-y-2 flex flex-col justify-end items-center w-[125px] h-[125px]">
				<Image
					src={"/assets/img/icons/miscellaneous/Location.png"}
					width={50}
					height={50}
					alt="logo"
					className="hover:scale-150 hover:cursor-pointer"
				/>
				<p className="text-white">Location</p>
			</a>
			<a
				href="/settings"
				className="space-y-2 flex flex-col justify-end items-center w-[125px] h-[125px]">
				<Image
					src={"/assets/img/icons/miscellaneous/Settings.png"}
					width={50}
					height={50}
					alt="logo"
					className="hover:scale-150 hover:cursor-pointer"
				/>
				<p className="text-white">Settings</p>
			</a>
		</div>
	);
}
