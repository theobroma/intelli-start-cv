import {
  alpha,
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import React from 'react';
import SectionTitle from '../../../@components/UI/SectionTitle';

const useStyles = makeStyles((theme: Theme) => ({
  description: {
    color: alpha(theme.palette.text.primary, 0.5),
    fontWeight: 400,
  },
}));

const ExperienceSection: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4}>
          <SectionTitle>Experience</SectionTitle>
          <Typography
            className={classes.description}
            variant="h6"
            color="inherit"
            paragraph
          >
            I like to get new hands-on experience that can be useful to other
            people.
          </Typography>
          <PermDataSettingIcon style={{ fontSize: 72 }} color="primary" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExperienceSection;
