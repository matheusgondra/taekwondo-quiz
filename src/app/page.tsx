import { TaekwondoIcon } from "@/components/icons/TaekwondoIcon";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<header className={styles.header}>
				<TaekwondoIcon />
			</header>
			<main className={styles.main}>
				<h1>
					Taekwondo
					<br />
					Quiz
				</h1>
				<Link className={styles.button} href="/question/1">Iniciar</Link>
			</main>
		</>
	);
}
