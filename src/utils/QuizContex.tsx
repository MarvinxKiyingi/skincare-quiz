import React, { createContext, useContext, useState } from 'react';
import quizApi from './../utils/quiz.json';

import { IQuiz, IQuizAnswers } from '../model/IQuiz';
import { IQuizContext } from '../model/IQuizContex';
import { shuffle } from './shuffle';

type IQuizContextProvidorProps = {
  children: JSX.Element;
};

export const QuizContext = createContext({} as IQuizContext);

export const useQuizContext = () => useContext(QuizContext);

export const QuizContexProvider = ({ children }: IQuizContextProvidorProps) => {
  //TODO: The variable bellow should not render ever time a user answers a question, perhaps should be in a use useEffect to solve the issue?
  const quizApiResponse: Array<IQuiz> = shuffle(quizApi);

  console.log('quizApiResponse', quizApiResponse);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizProgress, setQuizProgress] = useState(0);
  const [viewQuiz, setViewQuiz] = useState(true);
  const [quizScore, setQuizScore] = useState(0);

  const inkrementWith = 100 / quizApiResponse.length;

  const handleProgress = () => {
    setQuizProgress(quizProgress + inkrementWith);
  };

  const handleAnswer = (answers: IQuizAnswers) => {
    const nextQuestion = currentQuestionIndex + 1;
    handleProgress();

    if (nextQuestion < quizApiResponse.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setViewQuiz(false);
    }

    if (answers.isTrue === true) {
      setQuizScore(quizScore + 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setQuizProgress(0);
    setQuizScore(0);
    setViewQuiz(true);
  };
  const values = {
    state: { currentQuestionIndex, quizProgress, viewQuiz, quizScore },
    handlers: { quizApiResponse, handleProgress, handleAnswer, handleReset },
  };

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
};
