import './App.css';
import Header from './components/Header';
import { Container } from '@material-ui/core';

function App() {

  return (
    <Container maxWidth={false} disableGutters={true}>
      <Header />
    </Container>
  );
}

export default App;
