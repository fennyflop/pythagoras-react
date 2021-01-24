import './App.css';
import List from '../List/List';
import AddList from '../AddList/AddList';
import Header from '../Header/Header';
import Calculator from '../Calculator/Calculator';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <h1>Hello</h1>
          </Route>
          <Route path="/table">
            <List />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
