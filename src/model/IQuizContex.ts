import { Dispatch, SetStateAction } from 'react';
import { IQuiz, IQuizAnswers } from './IQuiz';

export type IQuizContext = {
  state: {
    currentQuestionIndex: number | null;
    setCurrentQuestionIndex?: Dispatch<SetStateAction<number>>;

    quizProgress: number | null;
    setQuizProgress?: Dispatch<SetStateAction<number>>;

    viewQuiz: boolean | null;
    setViewQuiz?: Dispatch<SetStateAction<boolean>>;

    quizScore: number | null;
    setQuizScore?: Dispatch<SetStateAction<number>>;
  };
  handlers: {
    quizApiResponse: Array<IQuiz>;
    handleProgress: () => void;
    handleAnswer: (answer: IQuizAnswers) => void;
    handleReset: () => void;
  };
};
