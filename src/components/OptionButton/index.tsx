import "./option-button.css";

interface OptionButtonProps {
	option: "A" | "B" | "C" | "D";
	text: string;
	variant: "default" | "correct" | "wrong";
}

export function OptionButton({ option, text, variant }: OptionButtonProps) {	
	const setBorder = (variant: string) => {
		switch (variant) {
			case "correct":
				return "correct";
			case "wrong":
				return "wrong";
			default:
				return "";
		}
	}

	return (
		<button className={`option-button ${setBorder(variant)}`}>
			<span className="option-button__option">{option}</span>
			{text}
		</button>
	);
}
