import { getQuestion } from "@/actions";
import { Background } from "@/components/Background";
import { OptionButton } from "@/components/OptionsButton";
import { TaekwondoIcon } from "@/components/icons/TaekwondoIcon";
import Link from "next/link";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

interface QuestionPageProps {
	params: {
		id: string;
	};
	questionData: any[];
}

export default async function QuestionPage({ params }: QuestionPageProps) {
	const data = await getQuestion(parseInt(params.id));

	if(!data) {
		return redirect("/result");
	}

	return (
		<div>
			<Background>
				<TaekwondoIcon size="small" />
				<div className={styles.cardQuestion}>
					<h1>Pergunta</h1>
					<p>{data.question}</p>
				</div>
			</Background>
			<ul>
				<li>
					<OptionButton
						option="A"
						text=""
					/>
				</li>
				<li>
					<OptionButton
						option="B"
						text=""
					/>
				</li>
				<li>
					<OptionButton
						option="C"
						text=""
					/>
				</li>
				<li>
					<OptionButton
						option="D"
						text=""
					/>
				</li>
			</ul>
			<Link href={`/question/${parseInt(params.id) + 1}`}>Continuar</Link>
		</div>
	);
}