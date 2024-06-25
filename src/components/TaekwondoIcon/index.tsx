import tkdIcon from "../../assets/twd.png";
import tkdSmallIcon from "../../assets/tkd-small.png";
import tkdDetailedIcon from "../../assets/tkd-kick.png";

interface TaekwondoIconProps {
	size?: "small" | "large";
	variant?: "simple" | "detailed";
}

export function TaekwondoIcon({ size = "large", variant = "simple" }: TaekwondoIconProps) {
	if (variant === "detailed") {
		return <img src={tkdDetailedIcon} width={121} height={121} alt="Lutador de taekwondo chutando alto" />;
	}

	return <img src={size === "large" ? tkdIcon : tkdSmallIcon} alt="Lutador de taekwondo chutando alto" />;
}
