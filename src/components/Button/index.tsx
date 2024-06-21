"use client";

import styles from "./button.module.css"

interface ButtonProps {
	letter: string;
	text: string;
}

export function Button({ letter, text }: ButtonProps) {
	return (
		<button className={styles.button}><span>{letter}</span>  {text}</button>
	);
}