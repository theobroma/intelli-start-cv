import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
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

export const ContactsInfo: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box my={2}>
        <Typography color="textSecondary" display="inline">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          display="inline"
        >
          Name:
        </Typography>
        <Typography variant="subtitle1" align="center" display="inline">
          Oleksandr Syryi
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
          Position:
        </Typography>
        <Typography variant="subtitle1" align="center" display="inline">
          JavaScript front-end Developer
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
          Address:
        </Typography>
        <Typography variant="subtitle1" align="center" display="inline">
          Krolevets , Sumy region, Ukraine.
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
          Birthday:
        </Typography>
        <Typography variant="subtitle1" align="center" display="inline">
          22 March 1988
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
          Skype:
        </Typography>
        <Typography variant="subtitle1" align="center" display="inline">
          fastwriter222
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
          Phone:
        </Typography>
        <Typography variant="subtitle1" align="center" display="inline">
          +3 (068) 816-35-77
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
          Email:
        </Typography>
        <Typography variant="subtitle1" align="center" display="inline">
          theobroma222@gmail.com
        </Typography>
      </Box>
    </>
  );
};
