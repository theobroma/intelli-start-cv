import {
  alpha,
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import React from 'react';
import SectionTitle from '../../../@components/UI/SectionTitle';

const useStyles = makeStyles((theme: Theme) => ({
  description: {
    color: alpha(theme.palette.text.primary, 0.5),
    fontWeight: 400,
  },
}));

const SkillsSection: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* 1 */}
        <Grid item xs={12} sm={12} md={4}>
          <SectionTitle>Skills</SectionTitle>
          <Typography
            className={classes.description}
            variant="h6"
            color="inherit"
            paragraph
          >
            I enjoy learning new things about web development and putting that
            into practice.
          </Typography>
          <EmojiObjectsIcon style={{ fontSize: 72 }} color="primary" />
        </Grid>
        {/* 2 */}
        <Grid container item xs={12} sm={12} md={4} spacing={4}>
          <Grid item xs={12}>
            <SectionTitle>Skills</SectionTitle>
            <Typography
              className={classes.description}
              variant="h6"
              color="inherit"
              paragraph
            >
              1
            </Typography>
            <EmojiObjectsIcon style={{ fontSize: 72 }} color="primary" />
          </Grid>
          <Grid item xs={12}>
            <SectionTitle>Skills</SectionTitle>
            <Typography
              className={classes.description}
              variant="h6"
              color="inherit"
              paragraph
            >
              2
            </Typography>
            <EmojiObjectsIcon style={{ fontSize: 72 }} color="primary" />
          </Grid>
        </Grid>
        {/* 3 */}
        <Grid container item xs={12} sm={12} md={4} spacing={4}>
          <Grid item xs={12}>
            <SectionTitle>Skills</SectionTitle>
            <Typography
              className={classes.description}
              variant="h6"
              color="inherit"
              paragraph
            >
              1
            </Typography>
            <EmojiObjectsIcon style={{ fontSize: 72 }} color="primary" />
          </Grid>
          <Grid item xs={12}>
            <SectionTitle>Skills</SectionTitle>
            <Typography
              className={classes.description}
              variant="h6"
              color="inherit"
              paragraph
            >
              2
            </Typography>
            <EmojiObjectsIcon style={{ fontSize: 72 }} color="primary" />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillsSection;
