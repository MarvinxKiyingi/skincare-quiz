import { Box, Button, LinearProgress, styled, Typography } from '@mui/material';
import { StyledWrapper } from '../App';
import { useQuizContext } from '../utils/QuizContex';
import { shuffle } from '../utils/shuffle';

export const StyledQuiz = styled(Box)(({ theme }) => ({
  '.quizWrapper': {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(10,1fr)',
    },
  },
  '.quizContainer': {
    display: 'flex',
    flexDirection: 'column',
    padding: '0rem 1rem',
    [theme.breakpoints.up('md')]: {
      gridColumn: '2/-2',
    },
  },
  '.quizContainer-heading': {
    fontFamily: "'Akaya Kanadaka', cursive",
    fontWeight: 600,
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      ...theme.typography.h3,
      fontFamily: "'Akaya Kanadaka', cursive",
      fontWeight: 600,
    },
  },
  '.quizContainer-buttonWrapper': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    flex: 1,
    marginBottom: '1rem',

    [theme.breakpoints.up('md')]: {},
  },
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: theme.spacing(4),
  borderRadius: '8px 8px 0 0',
  backgroundColor: '#DCF2ED',

  '.MuiLinearProgress-bar1Determinate': {
    backgroundColor: '#20484F',
  },
}));

export default function Quiz() {
  const {
    state: { currentQuestionIndex, quizProgress },
    handlers: { quizApiResponse, handleAnswer },
  } = useQuizContext();
  return (
    <StyledWrapper>
      <StyledQuiz component='section'>
        <Box>
          <StyledLinearProgress className='linearProgress' variant='determinate' value={quizProgress ? quizProgress : 0} />
        </Box>

        {quizApiResponse.map(
          (question, index) =>
            index === currentQuestionIndex && (
              <Box key={index} className='quizWrapper'>
                <Box className='quizContainer'>
                  <Typography className='quizContainer-heading' variant='h4' component='h1'>
                    {question.questionLabel}
                  </Typography>
                  <Box className='quizContainer-buttonWrapper'>
                    {shuffle(question.answerOptions).map((answers, index) => (
                      <Button
                        key={index}
                        onClick={() => {
                          return handleAnswer(answers);
                        }}
                        variant='outlined'
                      >
                        {answers.answerLabel}
                      </Button>
                    ))}
                  </Box>
                </Box>
              </Box>
            )
        )}
      </StyledQuiz>
    </StyledWrapper>
  );
}
