import { useState } from 'react';
import './App.css';
import quizApi from './utils/quiz.json';
import { IQuiz, IQuizAnswers } from './model/IQuiz';
import { Button, LinearProgress, Paper, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

const QuizContainer = styled(Box)(({ theme }) => ({
  '.correct': {
    backgroundColor: 'darkseagreen',
  },
  '.linearProgress': {
    height: '1rem',
  },
}));

function App() {
  function shuffle(array: Array<any>) {
    return array.sort(() => Math.random() - 0.5);
  }

  const quiz: Array<IQuiz> = shuffle(quizApi);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [viewQuiz, setViewQuiz] = useState(true);
  const [quizScore, setQuizScore] = useState(0);

  const inkrementWith = 100 / quiz.length;

  const handleProgress = () => {
    setProgress(progress + inkrementWith);
  };

  const handleAnswer = (answers: IQuizAnswers) => {
    const nextQuestion = currentQuestionIndex + 1;
    handleProgress();

    if (nextQuestion < quiz.length) {
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
    setProgress(0);
    setQuizScore(0);
    setViewQuiz(true);
  };
  return (
    <QuizContainer className='App'>
      <Box component='header' className='App-header'>
        {viewQuiz ? (
          <>
            <Box sx={{ width: '50%' }}>
              <LinearProgress className='linearProgress' variant='determinate' color='success' value={progress} />
            </Box>

            {quiz.map(
              (question, index) =>
                index === currentQuestionIndex && (
                  <Box key={index}>
                    <Box>{question.questionLabel}</Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem' }}>
                      {shuffle(question.answerOptions).map((answers, index) => (
                        <Paper
                          key={index}
                          onClick={() => {
                            return handleAnswer(answers);
                          }}
                          component='button'
                        >
                          {answers.answerLabel}
                        </Paper>
                      ))}
                    </Box>
                  </Box>
                )
            )}
          </>
        ) : (
          <Paper>
            <Typography component='h1' variant='h3'>
              Quiz results
            </Typography>
            <Typography component='h2' variant='subtitle1'>
              Quiz results
            </Typography>

            <Typography component='h1' variant='h1' sx={{ fontWeight: 700 }}>
              {quizScore} / {quiz.length}
            </Typography>
            <Button variant='contained' onClick={handleReset} sx={{ margin: '1rem 0rem' }}>
              Reset quiz
            </Button>
          </Paper>
        )}
      </Box>
    </QuizContainer>
  );
}

export default App;
