import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LaunchList from './components/launch-list';
import DetailView from './components/detail-view';
import './App.css';
import { Container, Box, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Container maxWidth="lg" >
        <Paper elevation={3} square sx={{mb: "1rem", px: "1rem"}} >
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            height="5rem"
            maxWidth="lg"
            >
              <h3> SpaceX Launches</h3>
          </Box>
        </Paper>

        <Box>
          <Router>
            <Switch>
              <Route exact path="/">
                <LaunchList />
              </Route>
              <Route exact path="/:id">
                <DetailView />
              </Route>
            </Switch>
          </Router>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
