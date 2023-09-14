import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: "0px",
    padding: "0px",
    boxSizing: "border-box",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} disableGutters={true} className={`App ${classes.root}`}>
      <Header />
    </Container>
  );
}

export default App;
