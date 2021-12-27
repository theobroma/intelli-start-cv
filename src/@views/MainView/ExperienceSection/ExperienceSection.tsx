import {
  alpha,
  Box,
  Container,
  Grid,
  Link,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import React from 'react';
import SectionTitle from '../../../@components/UI/SectionTitle';

const useStyles = makeStyles((theme: Theme) => ({
  titleBlock: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  description: {
    color: alpha(theme.palette.text.primary, 0.5),
    fontWeight: 400,
  },
  skillTitle: {
    fontSize: '1.2rem',
    paddingTop: 16,
    marginBottom: 0,
  },
  skillDesc: {
    fontSize: '1rem',
    color: alpha(theme.palette.text.primary, 0.5),
  },
  italic: {
    fontStyle: 'italic',
  },
}));

const ExperienceSection: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* 1 */}
        <Grid item xs={12} sm={12} md={4}>
          <Box className={classes.titleBlock}>
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
          </Box>
        </Grid>
        {/* 2 */}
        <Grid container item xs={12} sm={12} md={8}>
          <Grid item xs={12}>
            <Typography
              className={classes.skillTitle}
              variant="h6"
              color="inherit"
              paragraph
            >
              ITIMUM,Kiev ({' '}
              <Link
                href="https://www.linkedin.com/company/itimum/about/"
                target="__blank"
              >
                link
              </Link>{' '}
              )
            </Typography>
            <Typography
              className={classes.skillDesc}
              variant="h6"
              color="inherit"
              paragraph
            >
              10.2018-10.2019 - FrontEnd Developer
            </Typography>
            <Typography
              className={`${classes.skillDesc} ${classes.italic}`}
              variant="h6"
              color="inherit"
              paragraph
            >
              1) Iblabla: react+redux project. Developed react components.
              <br />
              2) epolis:php project. Wrote html+css and jquery scripts.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.skillTitle}
              variant="h6"
              color="inherit"
              paragraph
            >
              Self education
            </Typography>
            <Typography
              className={classes.skillDesc}
              variant="h6"
              color="inherit"
              paragraph
            >
              2015–present
            </Typography>
            <Typography
              className={`${classes.skillDesc} ${classes.italic}`}
              variant="h6"
              color="inherit"
              paragraph
            >
              Learning WebDevelopment in general, JavaScript, ReactJS
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExperienceSection;
