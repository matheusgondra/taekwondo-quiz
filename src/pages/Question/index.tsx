import { Link, useNavigate, useParams } from "react-router-dom";
import { OptionButton } from "../../components/OptionButton";
import { TaekwondoIcon } from "../../components/TaekwondoIcon";
import { useQuestions } from "../../hooks";
import "./question.css";
import { useEffect } from "react";

export function Question() {
	const { id } = useParams();
	const navigate = useNavigate();
	const question = useQuestions(parseInt(id!));
	
	useEffect(() => {
		if (!question) {
			navigate("/");
		}
	}, [question, navigate]);

	if (!question) {
		return null;
	}

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
					<li><OptionButton option="A" text={question.options[0]} /></li>
					<li><OptionButton option="B" text={question.options[1]} /></li>
					<li><OptionButton option="C" text={question.options[2]} /></li>
					<li><OptionButton option="D" text={question.options[3]} /></li>
				</ul>
				<Link className="btn" to={`/question/${parseInt(id!) + 1}`}>Continuar</Link>
			</main>
		</div>
	);
}
