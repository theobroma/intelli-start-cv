import { alpha, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
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
  const classes = useStyles();
  return (
    <blockquote className={classes.blockquote}>
      <p className={classes.quoteText}>
        “What I cannot create, I do not understand.”
      </p>
      <p className={classes.author}>Richard Feynman</p>
    </blockquote>
  );
};
