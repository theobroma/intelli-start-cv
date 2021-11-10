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
  Paper,
  Typography,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import CurrentWeather from '../../../@components/CurrentWeather';
import Forecast from '../../../@components/Forecast';
import SectionTitle from '../../../@components/UI/SectionTitle';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
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

const ProjectsSection: React.FC = () => {
  const classes = useStyles();
  const cards = [{}, {}, {}] as any;
  return (
    <Container maxWidth="lg">
      {/* <Grid container spacing={3} style={{ padding: 3 }}>
        <Grid item xs={12}>
          <Box mb={1}>
            <Paper elevation={3}>
              fdfdfdf
              <Search />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={1}>
            <Paper elevation={3}>
              <CurrentWeather />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={1}>
            <Paper elevation={3}>
              <Forecast />
            </Paper>
          </Box>
        </Grid>
      </Grid> */}
      <SectionTitle>SectionTitle</SectionTitle>
      <Grid container spacing={4}>
        {cards.map((card: any) => (
          <Grid item key={card} xs={12} sm={12} md={4}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                component="img"
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsSection;
