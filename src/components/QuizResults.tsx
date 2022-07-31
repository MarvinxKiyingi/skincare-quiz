import { Box, Button, styled, Typography } from '@mui/material';
import { StyledWrapper } from '../App';
import { useQuizContext } from '../utils/QuizContex';

const StyledQuizResults = styled(Box)(({ theme }) => ({
  padding: '0 1rem',
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    display: 'grid !important',
    gridTemplateColumns: 'repeat(10,1fr)',
  },
  '.quizResults-container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    [theme.breakpoints.up('md')]: {
      gridColumn: '2/-2',
    },
    '.quizResults-heading': {
      fontFamily: "'Akaya Kanadaka', cursive",
      fontWeight: 600,
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        ...theme.typography.h3,
        fontFamily: "'Akaya Kanadaka', cursive",
        fontWeight: 600,
      },
    },
  },
  '.quizScore-container': {
    backgroundColor: '#FAFAFA',
    color: '#20484F',
    border: ' 1px solid rgba(32, 72, 79, 0.2)',
    borderRadius: '8px',
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0 1rem',
    '.quizScore-label': {
      fontWeight: 700,
      textAlign: 'center',
      alignSelf: 'center',
    },
  },
}));
export const QuizResults = () => {
  const {
    state: { quizScore },
    handlers: { quizApiResponse, handleReset },
  } = useQuizContext();
  return (
    <StyledWrapper>
      <StyledQuizResults component='section'>
        <Box className='quizResults-container'>
          <Typography className='quizResults-heading' component='h1' variant='h3'>
            Results
          </Typography>

          <Box className='quizScore-container'>
            <Typography className='quizScore-label' component='h1' variant='h1'>
              {quizScore} / {quizApiResponse.length}
            </Typography>
          </Box>

          <Button variant='contained' onClick={handleReset} sx={{ margin: '1rem 0rem' }}>
            Reset quiz
          </Button>
        </Box>
      </StyledQuizResults>
    </StyledWrapper>
  );
};
