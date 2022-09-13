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
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

import SectionTitle from '../../../@components/UI/SectionTitle';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // backgroundColor: '#2b2b2b',
  },
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
}));

const SkillsSection = () => {
  const classes = useStyles();
  return (
    <Box py={3} component="section" id="skills" className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* 1 */}
          <Grid item xs={12} sm={12} md={4}>
            <Box className={classes.titleBlock}>
              <SectionTitle>Skills</SectionTitle>
              <Typography
                className={classes.description}
                variant="h6"
                color="inherit"
                paragraph
              >
                I enjoy learning new things about web development and putting
                that into practice.
              </Typography>
              <EmojiObjectsIcon style={{ fontSize: 72 }} color="primary" />
            </Box>
          </Grid>
          {/* 2 */}
          <Grid container item xs={12} sm={12} md={8}>
            <Grid item xs={12} sm={6}>
              <Typography
                className={classes.skillTitle}
                variant="h6"
                color="inherit"
                paragraph
              >
                Back-end
              </Typography>
              <Typography
                className={classes.skillDesc}
                variant="h6"
                color="inherit"
                paragraph
              >
                NodeJS/ExpressJS/NestJS
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                className={classes.skillTitle}
                variant="h6"
                color="inherit"
                paragraph
              >
                Working with layouts
              </Typography>
              <Typography
                className={classes.skillDesc}
                variant="h6"
                color="inherit"
                paragraph
              >
                Photoshop(basic knowleges)
                <br />
                Zeplin/Figma
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                className={classes.skillTitle}
                variant="h6"
                color="inherit"
                paragraph
              >
                Markup & Styling
              </Typography>
              <Typography
                className={classes.skillDesc}
                variant="h6"
                color="inherit"
                paragraph
              >
                HTML, CSS, SASS
                <br />
                Bootstrap/AntD/MaterialUI
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                className={classes.skillTitle}
                variant="h6"
                color="inherit"
                paragraph
              >
                Front-end(main direction)
              </Typography>
              <Typography
                className={classes.skillDesc}
                variant="h6"
                color="inherit"
                paragraph
              >
                JavaScript(ES@next/TypeScript)
                <br />
                ReactJS&Redux(Redux Toolkit)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Container>
    </Box>
  );
};

export default SkillsSection;
