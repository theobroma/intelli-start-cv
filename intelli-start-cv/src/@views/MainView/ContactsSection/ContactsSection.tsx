import React from 'react';

import type { Theme } from '@material-ui/core';
import { Box, Container, Divider, Grid, makeStyles } from '@material-ui/core';

import SectionTitle from '../../../@components/UI/SectionTitle';

import ContactsInfo from './ContactsInfo';
import { QuoteText } from './QuoteText';
import { SocialButtons } from './SocialButtons';

const useStyles = makeStyles((theme: Theme) => ({
  itemStyle: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
}));

const ContactsSection = () => {
  const classes = useStyles();
  return (
    <Box py={3} component="section" id="contacts">
      <Container maxWidth="lg">
        <Box py={3}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={9} className={classes.itemStyle}>
              <SectionTitle>Contact Details</SectionTitle>
              <Box pb={3}>
                <ContactsInfo />
              </Box>
              <Box py={3}>
                <SocialButtons />
              </Box>
              <Box py={3}>
                <QuoteText />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider />
      </Container>
    </Box>
  );
};

export default ContactsSection;
