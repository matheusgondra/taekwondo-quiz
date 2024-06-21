import "./home.css";
import { Button } from "../../components/Button";
import { TaekwondoIcon } from "../../components/TaekwondoIcon";

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
				<Button>Iniciar</Button>
			</main>
		</>
	);
}
