import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    ...createStyles({
      grow: {
        flexGrow: 1,
      },
      title: {
        display: 'none',
        color: theme.palette.common.white,
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
    }),
  };
});
