import React from 'react';

import type { Theme } from '@material-ui/core';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: '2rem',
  },
  point: {
    fontSize: '3rem',
    color: theme.palette.primary.main,
  },
}));

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.title}
      gutterBottom
      variant="body1"
      component="h2"
    >
      {children}
      <span className={classes.point}>.</span>
    </Typography>
  );
};
export default SectionTitle;
