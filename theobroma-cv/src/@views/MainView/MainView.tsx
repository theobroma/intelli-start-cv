import { Box, Container, Grid, Paper } from '@mui/material';

const MainView = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          //  style={{ padding: 3 }}
        >
          <Grid item xs={12}>
            <Box sx={{ mb: 1 }}>
              <Paper elevation={3}>
                {/* Search */}
                AppSearch
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={1}>
              <Paper elevation={3}>
                {/* CurrentWeather */}
                CurrentWeather{' '}
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={1}>
              <Paper elevation={3}>
                {/* Forecast */}
                Forecast
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainView;
