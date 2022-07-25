import { alpha } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  blockquote: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    margin: '23px 0 0',
  },
  quoteText: {
    // color: '#5c5c5c',
    color: alpha(theme.palette.text.primary, 0.75),
    margin: 0,
    fontStyle: 'italic',
  },
  author: {
    fontWeight: 700,
    fontSize: 14,
    color: alpha(theme.palette.text.primary, 0.9),
    margin: 0,
    // marginLeft: 'auto',
    marginLeft: 200,
  },
}));

export const QuoteText = () => {
  const { classes } = useStyles();
  return (
    <blockquote className={classes.blockquote}>
      <p className={classes.quoteText}>“What I cannot create, I do not understand.”</p>
      <p className={classes.author}>Richard Feynman</p>
    </blockquote>
  );
};
