import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';

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
    <div className={`App ${classes.root}`}>
      <Header />
    </div>
  );
}

export default App;
