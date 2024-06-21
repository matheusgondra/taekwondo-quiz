import Image from "next/image";
import tkdIcon from "./tkd.png";
import tkdSmallIcon from "./tkd-small.png";

interface TaekwondoIconProps {
	size?: "small" | "large";
}

export function TaekwondoIcon({ size = "large" }: TaekwondoIconProps) {
	return (
		<Image
			src={size === "large" ? tkdIcon : tkdSmallIcon}
			alt="Taekwondo Icon"
		/>
	);
}
