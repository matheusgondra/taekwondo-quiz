import styles from "./option-button.module.css";

interface OptionButtonProps {
	option: "A" | "B" | "C" | "D";
	text: string;
}

export function OptionButton({ option, text }: OptionButtonProps) {
	return (
		<button className={styles.optionButton}>
			<span className={styles.optionButtonOption}>{option}</span>
			{text}
		</button>
	);
}
