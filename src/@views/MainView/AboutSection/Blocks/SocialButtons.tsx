import { Button, makeStyles, Theme, Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  linkedinBtn: {
    backgroundColor: '#0a66c2',
    margin: 6,
    color: theme.palette.common.white,
  },
  gmailBtn: {
    backgroundColor: '#ea4335',
    margin: 6,
    color: theme.palette.common.white,
  },
  telegramBtn: {
    backgroundColor: '#0088cc',
    margin: 6,
    color: theme.palette.common.white,
  },
}));

export const SocialButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        color="textSecondary"
        display="inline"
      >
        Social:
      </Typography>
      <Button
        className={classes.linkedinBtn}
        variant="contained"
        startIcon={<LinkedInIcon />}
        target="__blank"
        href="https://www.linkedin.com/in/olexandr-siryj-39852a99/"
      >
        LinkedIn
      </Button>
      <Button
        className={classes.gmailBtn}
        variant="contained"
        startIcon={<EmailIcon />}
        target="__blank"
        href="mailto:theobroma222@gmail.com?subject=Hello%20Aleksandr,%20From%20Github"
      >
        Gmail
      </Button>
      <Button
        className={classes.telegramBtn}
        variant="contained"
        startIcon={<TelegramIcon />}
        target="__blank"
        href="https://t.me/theobroma222"
      >
        Telegram
      </Button>
    </div>
  );
};
