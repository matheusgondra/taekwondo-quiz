import { Link } from "react-router-dom";
import { useQuizContext } from "../../hooks";

export function ResultPage() {
	const { result } = useQuizContext();
	console.log("Resultado na outra pagina: ", result);

	return (
		<>
			<h1>Resultado:</h1>
			<p>Acertou: {result.correct} / 16</p>
			<p>Erros: {result.wrong} / 16</p>
			<Link to="/">Voltar</Link>
		</>
	);
}
