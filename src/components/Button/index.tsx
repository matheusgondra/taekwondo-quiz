import "./button.css";
import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
}

export function Button({ children }: ButtonProps) {
	return <button className="button">{children}</button>;
}
