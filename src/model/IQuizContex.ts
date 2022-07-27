import { Dispatch, SetStateAction } from 'react';

export interface IQuizContext {
  state: {
    name: string | null;
    setName: Dispatch<SetStateAction<string>>;
  };
  handlers: {};
}
