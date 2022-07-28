import { Button, Typography, styled, Box } from '@mui/material';
import { StyledWrapper } from '../App';
import { useQuizContext } from '../utils/QuizContex';

const StyledStartPage = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  h1: {
    fontFamily: "'Akaya Kanadaka', cursive",
    fontWeight: 600,
    textAlign: 'center',
    maxWidth: '90%',
    [theme.breakpoints.up('md')]: {
      ...theme.typography.h3,
      fontFamily: "'Akaya Kanadaka', cursive",
      fontWeight: 600,
    },
    'startPages-cta': {
      fontFamily: 'inter',
    },
  },
}));

export const StartPage = () => {
  const {
    handlers: { getQuiz },
  } = useQuizContext();
  return (
    <StyledWrapper>
      <StyledStartPage component='section'>
        <Typography variant='h4' component='h1'>
          How much do you think you know about skincare?
        </Typography>
        <Button onClick={getQuiz} variant='contained'>
          Start quiz
        </Button>
      </StyledStartPage>
    </StyledWrapper>
  );
};
