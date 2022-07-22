export type IQuiz = { questionLabel: string; answerOptions: Array<IQuizAnswers> };

export type IQuizAnswers = {
  answerLabel: string;
  isTrue: boolean;
};
