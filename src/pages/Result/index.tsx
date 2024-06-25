import { Button } from "../../components/Button";
import { TaekwondoIcon } from "../../components/TaekwondoIcon";
import { useQuizContext } from "../../hooks";
import "./result.css";

export function ResultPage() {
	const { result } = useQuizContext();
	const totalQuestions = 16;

	return (
		<>
			<header className="header">
				<TaekwondoIcon />
			</header>
			<main className="result-page-container">
				<div>
					<TaekwondoIcon variant="detailed" />
					<p>
						Acertos:
						<span>
							<span className="result-correct">{result.correct}</span> / {totalQuestions}
						</span>
					</p>
					<p>
						Erros:
						<span>
							<span className="result-wrong">{result.wrong}</span> / {totalQuestions}
						</span>
					</p>
				</div>

				<Button path="/" disabled={false}>
					Voltar
				</Button>
			</main>
		</>
	);
}
