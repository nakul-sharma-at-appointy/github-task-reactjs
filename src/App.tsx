import './App.css';
import Header from './components/Header';
import { Box, Container, Theme, createStyles, makeStyles } from '@material-ui/core';
import UserProfile from './components/UserProfile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layoutBody: {
      display: "flex"
    }
  }),
);


function App() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} disableGutters={true}>
      <Header />
      <Box className={classes.layoutBody}>
        <UserProfile />
      </Box>
    </Container>
  );
}

export default App;
