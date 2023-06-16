import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makePoster } from '../utils/makePoster';

export const MoviesList = ({ movies = [] }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {movies.map(movie => (
          <Grid item xs={2} sm={4} md={4} key={movie.id}>
            <Paper>
              <Box>
                <Box
                  sx={{
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={makePoster(movie.poster_path)}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectFitPosition: 'center',
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    py: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    style={{
                      fontWeight: 700,
                      textAlign: 'center',
                    }}
                  >
                    {movie.title}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
