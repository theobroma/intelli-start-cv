import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';
import React from 'react';

const useStyles = makeStyles()((theme) => ({
  title: {
    fontSize: '2rem',
  },
  point: {
    fontSize: '3rem',
    color: theme.palette.primary.main,
  },
}));

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  return (
    <Typography className={classes.title} gutterBottom variant="body1" component="h2">
      {children}
      <span className={classes.point}>.</span>
    </Typography>
  );
};

export default SectionTitle;
