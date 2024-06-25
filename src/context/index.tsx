import { ReactNode, createContext } from "react";
import { useResult } from "../hooks";

interface QuizContextType {
	result: {
		correct: number;
		wrong: number;
	};
	markCorrect: () => void;
	markWrong: () => void;
}

export const QuizContext = createContext<QuizContextType | null>(null);

interface QuizContextProps {
	children: ReactNode;
}

export function QuizContextProvider({ children }: QuizContextProps) {
	const { result, markCorrect, markWrong } = useResult();

	return <QuizContext.Provider value={{ result, markCorrect, markWrong }}>{children}</QuizContext.Provider>;
}
