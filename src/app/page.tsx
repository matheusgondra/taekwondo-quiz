import { Background } from "@/components/Background";
import { TaekwondoIcon } from "@/components/icons/TaekwondoIcon";
import Link from "next/link";
import styles from "./page.module.css";


export default async function Home() {
	return (
		<>
			<Background>
				<TaekwondoIcon />
			</Background>
			<main className={styles.main}>
				<h1>
					Taekwondo
					<br />
					Quiz
				</h1>
				<Link className={styles.button} href="/question/1" >Iniciar</Link>
			</main>
		</>
	);
}