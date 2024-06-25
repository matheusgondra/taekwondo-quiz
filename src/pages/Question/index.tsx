import { MouseEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { OptionButton } from "../../components/OptionButton";
import { TaekwondoIcon } from "../../components/TaekwondoIcon";
import { useQuestions, useQuizContext } from "../../hooks";
import "./question.css";

export function QuestionPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const question = useQuestions(parseInt(id!));
	const [selectedOption, setSelectedOption] = useState<string>("");
	const [isSelecting, setIsSelecting] = useState<boolean>(false);
	const { result, markCorrect, markWrong } = useQuizContext();

	useEffect(() => {
		if (!question) {
			navigate("/result");
		}
	}, [question, navigate]);

	useEffect(() => {
		if (question) {
			setSelectedOption("");
			setIsSelecting(false);
		}
	}, [question]);

	if (!question) {
		return null;
	}

	const handleOptionClick = (event: MouseEvent<HTMLButtonElement>) => {
		const text = event.currentTarget.textContent;
		if (text) {
			const response = text.slice(1, text.length);
			setSelectedOption(response);
			setIsSelecting(true);

			if (response === question.answer) {
				markCorrect();
			} else {
				markWrong();
			}
			console.log(result);
		}
	};

	const getVariant = (option: string) => {
		if (selectedOption) {
			if (option === question.answer) {
				return "correct";
			} else if (selectedOption === option) {
				return "wrong";
			}
		}
		return "default";
	};

	return (
		<div className="question-page">
			<header className="question-page-header">
				<TaekwondoIcon size="small" />
				<div className="card">
					<h1>Pergunta</h1>
					<p>{question.question}</p>
				</div>
			</header>
			<main className="question-page-container">
				<ul className="options">
					{question.options.map((option, index) => (
						<li key={index}>
							<OptionButton
								variant={getVariant(option)}
								disabled={isSelecting}
								option={String.fromCharCode(65 + index)}
								text={option}
								setResponse={handleOptionClick}
							/>
						</li>
					))}
				</ul>
				<Button path={`/question/${parseInt(id!) + 1}`} disabled={!isSelecting}>
					Continuar
				</Button>
			</main>
		</div>
	);
}
