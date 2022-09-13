import React from 'react';

import type { Theme } from '@material-ui/core';
import {
  alpha,
  Box,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

import SectionTitle from '../../../@components/UI/SectionTitle';

const useStyles = makeStyles((theme: Theme) => ({
  avatarBox: {
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      width: 200,
      height: 200,
      borderRadius: '5%',
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

const AboutSection = () => {
  const classes = useStyles();
  return (
    <Box py={3} component="section" id="about">
      <Container maxWidth="lg">
        <Box py={3}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Box className={classes.avatarBox}>
                <img
                  className={classes.avatar}
                  src="https://avatars.githubusercontent.com/u/4540573?v=4"
                  alt="avatar"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={9} className={classes.itemStyle}>
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
                focused on my skills improvement. Also I improved my English so
                I am strong enough in reading, writing and understanding
                technical resources.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider />
      </Container>
    </Box>
  );
};

export default AboutSection;
