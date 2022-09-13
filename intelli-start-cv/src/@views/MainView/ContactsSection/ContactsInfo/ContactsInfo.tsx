import React from 'react';

import type { Theme } from '@material-ui/core';
import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CakeIcon from '@material-ui/icons/Cake';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WorkIcon from '@material-ui/icons/Work';

import { ContactsItem } from './ContactsItem';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'left',
    },
  },
}));

export const ContactsInfo = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <ContactsItem title="Name:" icon={<PermIdentityIcon />}>
          Oleksandr Syryi
        </ContactsItem>
        <ContactsItem title="Position:" icon={<WorkIcon />}>
          JavaScript front-end Developer
        </ContactsItem>
        <ContactsItem title="Address:" icon={<LocationOnIcon />}>
          Krolevets , Sumy region, Ukraine.
        </ContactsItem>
        <ContactsItem title="Birthday:" icon={<CakeIcon />}>
          22 March 1988
        </ContactsItem>
        <ContactsItem title="Skype:" icon={<PhoneIcon />}>
          fastwriter222
        </ContactsItem>
        <ContactsItem title="Phone:" icon={<PhoneIphoneIcon />}>
          +3 (068) 816-35-77
        </ContactsItem>
        <ContactsItem title="Email:" icon={<AlternateEmailIcon />}>
          theobroma222@gmail.com
        </ContactsItem>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box className={classes.buttonWrap}>
          <Button
            variant="contained"
            size="large"
            color="default"
            className={classes.button}
            // target="__blank"
            // href="/"
            startIcon={<CloudDownloadIcon />}
          >
            Download Resume
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactsInfo;
