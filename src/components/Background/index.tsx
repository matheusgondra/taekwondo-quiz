import { ReactNode } from "react";
import styles from "./background.module.css";

interface BackgroundProps {
	children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
	return (
		<div className={styles.background}>
			{children}
		</div>
	);
}