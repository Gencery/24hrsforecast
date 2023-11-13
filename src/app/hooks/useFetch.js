import { useEffect, useState } from "react";

export default function useFetch(url) {
	const [data, setData] = useState({});

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [url]);

	console.log(data);
	return data;
}
