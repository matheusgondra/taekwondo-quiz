import { Link } from "react-router-dom";
import "./button.css";
import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	disabled: boolean;
	path: string;
}

export function Button({ children, disabled, path }: ButtonProps) {
	if (disabled) {
		return <button className="button" disabled>{children}</button>;
	}

	return <Link to={path} className="button">{children}</Link>;
}
