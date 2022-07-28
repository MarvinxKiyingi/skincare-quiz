import './App.css';
import { Button, LinearProgress, Paper, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useQuizContext } from './utils/QuizContex';
import { shuffle } from './utils/shuffle';
import { StartPage } from './components/StartPage';

const QuizContainer = styled(Box)(({ theme }) => ({
  '.correct': {
    backgroundColor: 'darkseagreen',
  },
  '.linearProgress': {
    height: '1rem',
  },
}));

export const StyledWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#DCF2ED',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  section: {
    display: 'flex',
    flexDirection: 'column',
    border: '4px solid #20484F',
    borderRadius: 12,
    backgroundColor: '#F1FFFC',
    height: '70vh',
    width: '70%',
    [theme.breakpoints.up('md')]: {
      height: '60vh',
    },
  },

  '.MuiButton-containedPrimary': {
    backgroundColor: '#20484F',
    '&:hover': {
      backgroundColor: '#20484F',
    },
  },
  '.MuiButton-outlined': {
    backgroundColor: '#FAFAFA',
    color: '#20484F',
    border: ' 1px solid rgba(32, 72, 79, 0.2)',
    '&:hover': {
      backgroundColor: '#FAFAFA',
      color: '#20484F',
      border: ' 1px solid rgba(32, 72, 79, 0.2)',
    },
  },
  '	.Mui-focusVisible': {
    color: 'red',
  },
}));

function App() {
  const {
    state: { viewStart, viewQuiz, viewResults, currentQuestionIndex, quizScore, quizProgress },
    handlers: { quizApiResponse, handleAnswer, handleReset },
  } = useQuizContext();

  return (
    <QuizContainer className='App'>
      {viewStart && <StartPage />}

      {viewQuiz && (
        <Box component='header' className='App-header'>
          {viewResults ? (
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
          ) : (
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
          )}
        </Box>
      )}
    </QuizContainer>
  );
}

export default App;
