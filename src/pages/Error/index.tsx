import "./error.css";
import { Link } from "react-router-dom";

export function ErrorPage() {
	return (
		<div className="error-page">
			<h1>Algo deu errado!</h1>
			<Link to="/">Voltar</Link>
		</div>
	);
}
