import data from '../data/questions.json';
import { shuffleList } from '../helpers/shuffle';
import { Question } from '../types/Question';

let questions: Question[] = shuffleList(data).slice(0, 16);

export const useStartQuiz = (): void => {
	questions = shuffleList(data).slice(0, 16)
}

export const useQuestions = (id: number): Question => {
	const question = questions[id - 1];
	return question;
}