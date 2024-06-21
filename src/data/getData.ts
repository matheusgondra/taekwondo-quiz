import { shuffleList } from "../helpers/shuffle";

export async function getData() {
	const res = await fetch("/data.json");
	const json = await res.json();
	console.log(json);
	return shuffleList(json).slice(0, 2);
}