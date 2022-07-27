import './App.css';
import { Button, LinearProgress, Paper, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useQuizContext } from './utils/QuizContex';
import { shuffle } from './utils/shuffle';

const QuizContainer = styled(Box)(({ theme }) => ({
  '.correct': {
    backgroundColor: 'darkseagreen',
  },
  '.linearProgress': {
    height: '1rem',
  },
}));

function App() {
  const {
    state: { viewQuiz, currentQuestionIndex, quizScore, quizProgress },
    handlers: { quizApiResponse, handleAnswer, handleReset },
  } = useQuizContext();

  return (
    <QuizContainer className='App'>
      <Box component='header' className='App-header'>
        {viewQuiz ? (
          <>
            <Box sx={{ width: '50%' }}>
              <LinearProgress className='linearProgress' variant='determinate' color='success' value={quizProgress ? quizProgress : 0} />
            </Box>

            {quizApiResponse.map(
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
              {quizScore} / {quizApiResponse.length}
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
