export default function BgVideo({ src }) {
	return (
		<video
			muted
			autoPlay
			loop
			className="w-[100vw] h-[100vh] object-fill z-[-1] fixed top-0 left-0">
			<source type="video/mp4" src={src} />
		</video>
	);
}
