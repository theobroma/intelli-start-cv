import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, makeStyles, Theme, Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginLeft: 6,
  },
  linkedinBtn: {
    backgroundColor: '#0a66c2',
    margin: 6,
  },
  gmailBtn: {
    backgroundColor: '#ea4335',
    margin: 6,
  },
  telegramBtn: {
    backgroundColor: '#0088cc',
    margin: 6,
  },
}));

const ContactsInfo: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      {/* 1 */}
      <Box my={2}>
        <Typography color="textSecondary" display="inline">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          display="inline"
        >
          Today:
        </Typography>
        <Typography variant="subtitle1" align="center" display="inline">
          text
        </Typography>
      </Box>
      <Box my={2}>
        <Typography color="textSecondary" display="inline">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          display="inline"
        >
          Today:
        </Typography>
        <Typography variant="subtitle1" align="center" display="inline">
          text
        </Typography>
      </Box>
      <Box my={2}>
        <Typography color="textSecondary" display="inline">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          display="inline"
        >
          Today:
        </Typography>
        <Typography variant="subtitle1" align="center" display="inline">
          text
        </Typography>
      </Box>
      {/* 2 */}
      <Box my={2}>
        <Typography
          // className={classes.title}
          color="textSecondary"
          display="inline"
        >
          Social:
        </Typography>
        <Button
          className={classes.linkedinBtn}
          variant="contained"
          startIcon={<LinkedInIcon />}
          // color="secondary"
          target="__blank"
          href="https://www.linkedin.com/in/olexandr-siryj-39852a99/"
        >
          LinkedIn
        </Button>
        <Button
          className={classes.gmailBtn}
          variant="contained"
          startIcon={<EmailIcon />}
          // color="secondary"
          target="__blank"
          href="mailto:theobroma222@gmail.com?subject=Hello%20Aleksandr,%20From%20Github"
        >
          Gmail
        </Button>
        <Button
          className={classes.telegramBtn}
          variant="contained"
          startIcon={<TelegramIcon />}
          // color="secondary"
          target="__blank"
          href="https://t.me/theobroma222"
        >
          Telegram
        </Button>
      </Box>
    </>
  );
};

export default ContactsInfo;
