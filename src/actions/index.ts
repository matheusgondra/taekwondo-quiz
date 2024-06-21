import { getData } from "@/data/getData";
import { revalidatePath } from "next/cache";

export async function getQuestion(id: number) {
	const dataQuestions = (await fetch("/data.json")).json();
	const question = dataQuestions[id - 1];
	if (question === undefined) {
		revalidatePath("/data.json");
		return null;
	}
	return question;
}
