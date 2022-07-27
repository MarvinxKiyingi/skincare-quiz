import React, { createContext, useContext, useState } from 'react';
import { IQuizContext } from '../model/IQuizContex';

type IQuizContextProvidorProps = {
  children: JSX.Element;
};

export const QuizContext = createContext({} as IQuizContext);

export const useQuizContext = () => useContext(QuizContext);

export const QuizContexProvider = ({ children }: IQuizContextProvidorProps) => {
  const [name, setName] = useState('Marvin');
  const values = { state: { name, setName }, handlers: {} };

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
};
