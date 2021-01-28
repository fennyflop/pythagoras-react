import './App.css';
import Algorithm from '../Algorithm/Algorithm';
import List from '../List/List';
import Header from '../Header/Header';
import Calculator from '../Calculator/Calculator';
import { Route, Switch } from 'react-router-dom';

function App() {
  const algorithm = new Algorithm(100000);
  const array = algorithm.renderArray();
  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <h1>Hello</h1>
          </Route>
          <Route path="/list">
            <List array={array} />
          </Route>
          <Route path="/calculator">
            <Calculator array={array} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
