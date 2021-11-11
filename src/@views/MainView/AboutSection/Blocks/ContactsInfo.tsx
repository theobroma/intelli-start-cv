import { Box, makeStyles, Typography } from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CakeIcon from '@material-ui/icons/Cake';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WorkIcon from '@material-ui/icons/Work';
import React from 'react';

const useStyles = makeStyles(() => ({
  title: {
    marginLeft: 6,
  },
  label: {
    minWidth: 130,
    display: 'flex',
    alignItems: 'center',
  },
}));

export const ContactsInfo: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box my={2} display="flex" alignItems="center">
        <Box className={classes.label}>
          <Typography color="textSecondary" display="inline">
            <PermIdentityIcon />
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            display="inline"
          >
            Name:
          </Typography>
        </Box>
        <Typography variant="subtitle1" align="center" display="inline">
          Oleksandr Syryi
        </Typography>
      </Box>
      <Box my={2} display="flex" alignItems="center">
        <Box className={classes.label}>
          <Typography color="textSecondary" display="inline">
            <WorkIcon />
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            display="inline"
          >
            Position:
          </Typography>
        </Box>
        <Typography variant="subtitle1" align="center" display="inline">
          JavaScript front-end Developer
        </Typography>
      </Box>
      <Box my={2} display="flex" alignItems="center">
        <Box className={classes.label}>
          <Typography color="textSecondary" display="inline">
            <LocationOnIcon />
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            display="inline"
          >
            Address:
          </Typography>
        </Box>
        <Typography variant="subtitle1" align="center" display="inline">
          Krolevets , Sumy region, Ukraine.
        </Typography>
      </Box>
      <Box my={2} display="flex" alignItems="center">
        <Box className={classes.label}>
          <Typography color="textSecondary" display="inline">
            <CakeIcon />
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            display="inline"
          >
            Birthday:
          </Typography>
        </Box>
        <Typography variant="subtitle1" align="center" display="inline">
          22 March 1988
        </Typography>
      </Box>
      <Box my={2} display="flex" alignItems="center">
        <Box className={classes.label}>
          <Typography color="textSecondary" display="inline">
            <PhoneIcon />
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            display="inline"
          >
            Skype:
          </Typography>
        </Box>
        <Typography variant="subtitle1" align="center" display="inline">
          fastwriter222
        </Typography>
      </Box>
      <Box my={2} display="flex" alignItems="center">
        <Box className={classes.label}>
          <Typography color="textSecondary" display="inline">
            <PhoneIphoneIcon />
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            display="inline"
          >
            Phone:
          </Typography>
        </Box>
        <Typography variant="subtitle1" align="center" display="inline">
          +3 (068) 816-35-77
        </Typography>
      </Box>
      <Box my={2} display="flex" alignItems="center">
        <Box className={classes.label}>
          <Typography color="textSecondary" display="inline">
            <AlternateEmailIcon />
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            display="inline"
          >
            Email:
          </Typography>
        </Box>
        <Typography variant="subtitle1" align="center" display="inline">
          theobroma222@gmail.com
        </Typography>
      </Box>
    </>
  );
};
