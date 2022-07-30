import { Button, Typography } from '@mui/material';
import { useQuizContext } from '../utils/QuizContex';

export const QuizResults = () => {
  const {
    state: { quizScore },
    handlers: { quizApiResponse, handleReset },
  } = useQuizContext();
  return (
    <div>
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
    </div>
  );
};
