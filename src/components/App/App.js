import './App.css';
import Algorithm from '../Algorithm/Algorithm';
import List from '../List/List';
import Header from '../Header/Header';
import Calculator from '../Calculator/Calculator';
import { useState, useEffect } from 'react';
import { ListContext } from '../../contexts/ListContext';
import { Route, Switch } from 'react-router-dom';

function App() {

  const [array, setArray] = useState([]);

  useEffect(() => {
    const algorithm = new Algorithm(30000);
    const arrayElement = algorithm.renderArray();
    setArray(arrayElement);
  }, []);

  return (
    <>
      <ListContext.Provider value={array}>
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
      </ListContext.Provider>
    </>
  );
}

export default App;
