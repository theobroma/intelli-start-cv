import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CakeIcon from '@mui/icons-material/Cake';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Box, Button, Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ContactsItem } from './ContactsItem';

const useStyles = makeStyles()((theme) => ({
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

const ContactsInfo = () => {
  const { classes } = useStyles();
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <ContactsItem title="Name:" icon={<PermIdentityIcon />}>
          Oleksandr Syryi
        </ContactsItem>
        <ContactsItem title="Position:" icon={<WorkOutlineIcon />}>
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
            className={classes.button}
            // target="__blank"
            // href="/"
            target="__blank"
            href="https://t.me/theobroma222"
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
