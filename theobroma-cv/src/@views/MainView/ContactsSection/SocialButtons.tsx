import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button, Typography } from '@mui/material';
import clsx from 'clsx';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
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
  btn: {
    margin: 6,
    color: theme.palette.common.white,
    transition: 'all 0.3s',
    '&:hover': {
      background: 'rgb(255, 11, 97)',
      boxShadow: '0px 4px 24px rgba(249, 44, 107, 0.52) !important',
    },
    '&:active': {
      background: 'rgb(255, 45, 80)',
      boxShadow: '0px 4px 24px rgba(249, 44, 107, 0.52) !important',
    },
  },
  linkedinBtn: {
    backgroundColor: '#0a66c2',
  },
  gmailBtn: {
    backgroundColor: '#ea4335',
  },
  telegramBtn: {
    backgroundColor: '#0088cc',
  },
}));

export const SocialButtons = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} color="textSecondary" display="inline">
        Social:
      </Typography>
      <Button
        className={clsx(classes.btn, classes.linkedinBtn)}
        variant="contained"
        startIcon={<LinkedInIcon />}
        target="__blank"
        href="https://www.linkedin.com/in/olexandr-siryj-39852a99/"
      >
        LinkedIn
      </Button>
      <Button
        className={clsx(classes.btn, classes.gmailBtn)}
        variant="contained"
        startIcon={<EmailIcon />}
        target="__blank"
        href="mailto:theobroma222@gmail.com?subject=Hello%20Aleksandr,%20From%20Github"
      >
        Gmail
      </Button>
      <Button
        className={clsx(classes.btn, classes.telegramBtn)}
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
