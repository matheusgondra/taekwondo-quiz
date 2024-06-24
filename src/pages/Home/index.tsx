import { Link } from "react-router-dom";
import { TaekwondoIcon } from "../../components/TaekwondoIcon";
import "./home.css";

export function Home() {
	return (
		<>
			<header className="header">
				<TaekwondoIcon />
			</header>
			<main className="container">
				<h1>
					Taekwondo
					<br />
					Quiz
				</h1>
				<Link className="button-init" to="/question/1">Iniciar</Link>
			</main>
		</>
	);
}
