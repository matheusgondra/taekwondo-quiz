import { MouseEvent } from "react";
import "./option-button.css";

interface OptionButtonProps {
	option: string;
	text: string;
	variant: "default" | "correct" | "wrong";
	disabled?: boolean;
	setResponse: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function OptionButton({ option, text, variant, disabled, setResponse }: OptionButtonProps) {
	const setBorder = (variant: string) => {
		switch (variant) {
			case "correct":
				return "correct";
			case "wrong":
				return "wrong";
			default:
				return "";
		}
	};

	return (
		<button className={`option-button ${setBorder(variant)}`} disabled={disabled} onClick={setResponse}>
			<span className="option-button__option">{option}</span>
			<span className="option-button__text">{text}</span>
		</button>
	);
}
