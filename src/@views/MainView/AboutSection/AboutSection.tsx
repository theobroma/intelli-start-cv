import {
  alpha,
  Box,
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import SectionTitle from '../../../@components/UI/SectionTitle';
import { ContactsInfo, SocialButtons, QuoteText } from './Blocks';

const useStyles = makeStyles((theme: Theme) => ({
  avatarBox: {
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      borderRadius: 4,
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'right',
    },
  },
  avatar: {
    width: '100%',
    maxWidth: 300,
    height: 'auto',
  },
  description: {
    color: alpha(theme.palette.text.primary, 0.8),
  },
  itemStyle: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
}));

const AboutSection: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Box py={3}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} className={classes.itemStyle}>
            <SectionTitle>About me</SectionTitle>
            <Typography
              className={classes.description}
              variant="h6"
              color="inherit"
              paragraph
            >
              My name is Oleksandr Syryi. I would like to occupy JavaScript
              React developer position in a team of highly qualified
              specialists. Last years I was engaged in self-education of
              learning web technologies. I chose front-end development and
              focused on my skills improvement. Also I improved my English so I
              am strong enough in reading, writing and understanding technical
              resources.
            </Typography>
            <Box py={3}>
              <ContactsInfo />
            </Box>
            <Box py={3}>
              <SocialButtons />
            </Box>
            <Box py={3}>
              <QuoteText />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={classes.avatarBox}>
              <img
                className={classes.avatar}
                src="https://avatars.githubusercontent.com/u/4540573?v=4"
                alt="avatar"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutSection;