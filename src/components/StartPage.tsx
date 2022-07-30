import { Button, Typography, styled, Box } from '@mui/material';
import { StyledWrapper } from '../App';
import { useQuizContext } from '../utils/QuizContex';

const StyledStartPage = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  [theme.breakpoints.up('md')]: {
    display: 'grid !important',
    gridTemplateColumns: 'repeat(10,1fr)',
  },
  h1: {
    fontFamily: "'Akaya Kanadaka', cursive",
    fontWeight: 600,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      ...theme.typography.h3,
      fontFamily: "'Akaya Kanadaka', cursive",
      fontWeight: 600,
    },
  },
  '.startPage-container': {
    gridColumn: '2/-2',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    [theme.breakpoints.up('md')]: {},
  },
  button: {
    alignSelf: 'center',
    [theme.breakpoints.up('md')]: {},
  },
}));

export const StartPage = () => {
  const {
    handlers: { getQuiz },
  } = useQuizContext();
  return (
    <StyledWrapper>
      <StyledStartPage component='section'>
        <Box className='startPage-container'>
          <Typography variant='h4' component='h1'>
            How much do you think you know about skincare?
          </Typography>
          <Button onClick={getQuiz} variant='contained'>
            Start quiz
          </Button>
        </Box>
      </StyledStartPage>
    </StyledWrapper>
  );
};
