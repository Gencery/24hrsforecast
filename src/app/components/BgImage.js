import Image from "next/image";
export default function BgVideo({ src }) {
	return (
		<Image
			className="w-[100vw] h-[100vh] object-cover z-[-1] fixed top-0 left-0"
			src={"/assets/img/bgImg.jpg"}
			alt="bgImg"
			layout="fill"
		/>
	);
}
