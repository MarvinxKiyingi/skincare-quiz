import './App.css';
import { styled, Box } from '@mui/material';
import { useQuizContext } from './utils/QuizContex';
import { StartPage } from './components/StartPage';
import Quiz from './components/Quiz';

const QuizContainer = styled(Box)(({ theme }) => ({}));

export const StyledWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#DCF2ED',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    margin: '0 60px',
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    border: '4px solid #20484F',
    borderRadius: 12,
    backgroundColor: '#F1FFFC',
    height: '95vh',
    width: '90%',
    [theme.breakpoints.up('md')]: {
      height: '60vh',
      width: '100%',
      gridColumn: '2/-2',
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
    state: { viewStart, viewQuiz },
  } = useQuizContext();

  return (
    <QuizContainer className='App'>
      {viewStart && <StartPage />}

      {viewQuiz && <Quiz />}
    </QuizContainer>
  );
}

export default App;
