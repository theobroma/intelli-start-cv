// https://ozzie.sh/passing-icons-as-props-in-a-consistent-way-using-react
import { Box, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

interface Props {
  title: string;
  icon: React.ReactElement;
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
  },
  title: {
    marginLeft: 10,
  },
  label: {
    minWidth: 130,
    display: 'flex',
    alignItems: 'center',
  },
}));

export const ContactsItem = ({ title, icon, children }: Props) => {
  const classes = useStyles();
  return (
    <Box my={3} className={classes.root}>
      <Box className={classes.label}>
        <Typography color="textSecondary" display="inline">
          {icon}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          display="inline"
        >
          {title}
        </Typography>
      </Box>
      <Typography variant="subtitle1" align="center" display="inline">
        {children}
      </Typography>
    </Box>
  );
};
