import { OptionButton } from "../../components/OptionButton";
import { useQuestions } from "../../hooks/useQuestions";

export function Question() {
	const questions = useQuestions();

	return (
		<div>
			<ol>
				{questions.map((question, index) => (
					<li key={index}>
						<OptionButton option={"A"} text={question.question} />
					</li>
				))}
			</ol>
		</div>
	);
}
