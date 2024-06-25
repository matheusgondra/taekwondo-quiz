import { useContext, useState } from 'react';
import data from '../data/questions.json';
import { shuffleList } from '../helpers/shuffle';
import { Question } from '../types/Question';
import { QuizContext } from '../context';

let questions: Question[] = shuffleList(data).slice(0, 16);

export const useStartQuiz = (): void => {
	questions = shuffleList(data).slice(0, 16)
}

export const useQuestions = (id: number): Question => {
	const question = questions[id - 1];
	return question;
}

export const useResult = () => {
	const [result, setResult] = useState({ correct: 0, wrong: 0 });

	const markCorrect = () => {
		setResult(prev => ({ ...prev, correct: prev.correct + 1 }));
	};

	const markWrong = () => {
		setResult(prev => ({ ...prev, wrong: prev.wrong + 1 }));
	};

	return { result, markCorrect, markWrong };
}

export const useQuizContext = () => {
	const context = useContext(QuizContext);
	if (!context) {
		throw new Error('useQuizContext must be used within a QuizContextProvider');
	}

	return context;
}