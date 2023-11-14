import { Inter } from "next/font/google";
import "./globals.css";
import BgVideo from "./components/BgVideo";
import BgImage from "./components/BgImage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Forecast - Smart Maple",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/public/assets/img/logo.png" />
			</head>
			<body className={inter.className}>
				{children}
				<BgImage />
				{/* <BgVideo src={"/bgVideo.mp4"} /> */}
			</body>
		</html>
	);
}
