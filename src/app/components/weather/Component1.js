import Image from "next/image";
export default function Component1() {
	return (
		<div>
			<Image
				src={"/assets/img/logoLong.png"}
				alt="maple software logo"
				width={275}
				height={60}
			/>
		</div>
	);
}
