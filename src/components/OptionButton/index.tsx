import "./option-button.css";

interface OptionButtonProps {
	option: "A" | "B" | "C" | "D";
	text: string;
}

export function OptionButton({ option, text }: OptionButtonProps) {
	return (
		<button className="option-button">
			<span className="option-button__option">{option}</span>
			{text}
		</button>
	);
}
