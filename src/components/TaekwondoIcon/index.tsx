import tkdIcon from "../../assets/twd.png";
import tkdSmallIcon from "../../assets/tkd-small.png";

interface TaekwondoIconProps {
	size?: "small" | "large";
}

export function TaekwondoIcon({ size = "large" }: TaekwondoIconProps) {
	return <img src={size === "large" ? tkdIcon : tkdSmallIcon} alt="Lutador de taekwondo chutando alto" />;
}
