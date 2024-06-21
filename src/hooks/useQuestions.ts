import data from '../data/questions.json';
import { Question } from '../types/Question';

export const useQuestions = (): Question[] => {
	const questions = data.sort().slice(0, 16);
	return questions;
}