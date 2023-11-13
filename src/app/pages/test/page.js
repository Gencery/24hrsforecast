"use client";
import useFetch from "@/app/hooks/useFetch";

export default function Index() {
	const data = useFetch("https://bible-api.com/Psalm+23?translation=kjv");
	return <p>{data.text}</p>;
}
