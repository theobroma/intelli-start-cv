import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import movieAppImg from '../../../@assets/images/movie-app-img.png';
import pixabayAppImg from '../../../@assets/images/pixabay-img.png';
import weatherAppImg from '../../../@assets/images/weahter-app-img.png';
import SectionTitle from '../../../@components/UI/SectionTitle';
import { ProjectType } from '../../../@types';

const useStyles = makeStyles({
  root: {
    // backgroundColor: '#2b2b2b',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    maxHeight: 270,
  },
  content: {
    flexGrow: 1,
  },
});

const ProjectsSection = () => {
  const classes = useStyles();
  const cards: ProjectType[] = [
    {
      thumbnail: movieAppImg,
      title: 'MovieDB App',
      desc: 'Search, See primary information, See trailers of different movies.',
      codeLink: 'https://github.com/theobroma/movie-app',
      demoLink: 'https://thirsty-swirles-283e34.netlify.app/',
    },
    {
      thumbnail: weatherAppImg,
      title: 'Weather App',
      desc: 'It is designed display your current and 3 day forecast weather.',
      codeLink: 'https://github.com/theobroma/weather-app',
      demoLink: 'https://theobroma.github.io/weather-app/',
    },
    {
      thumbnail: pixabayAppImg,
      title: 'PixaBay Image Finder',
      desc: ' App to find images utilizing the PixaBay API',
      codeLink: 'https://github.com/theobroma/pixabay-hooks-images',
      demoLink: 'https://theobroma.github.io/pixabay-hooks-images/',
    },
  ];
  return (
    <Box py={3} component="section" id="projects" className={classes.root}>
      <Container maxWidth="lg">
        <SectionTitle>Projects</SectionTitle>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={nanoid()} xs={12} sm={12} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  height="185"
                  component="img"
                  //   image="https://source.unsplash.com/random"
                  image={card.thumbnail}
                  alt="random"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>{card.desc}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    // startIcon={<EmailIcon />}
                    color="primary"
                    target="__blank"
                    href={card.codeLink}
                  >
                    Code
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    // startIcon={<EmailIcon />}
                    color="secondary"
                    target="__blank"
                    href={card.demoLink}
                  >
                    Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
