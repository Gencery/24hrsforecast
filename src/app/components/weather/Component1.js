import Image from "next/image";
export default function Component1() {
	return (
		<div className="box">
			<div>
				<Image src={"/assets/img/logo.png"} />
			</div>
			<a>
				<Image src={"/assets/img/logo.png"} />
			</a>
			<a>
				<Image src={"/assets/img/logo.png"} />
			</a>
			<a>
				<Image src={"/assets/img/logo.png"} />
			</a>
			<a>
				<Image src={"/assets/img/logo.png"} />
			</a>
		</div>
	);
}
