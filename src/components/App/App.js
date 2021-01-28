import './App.css';
import Algorithm from '../Algorithm/Algorithm';
import React from 'react';
// import List from '../List/List';
import Spinner from '../Spinner/Spinner';
import Header from '../Header/Header';
import Calculator from '../Calculator/Calculator';
import { useState, useEffect } from 'react';
import { ListContext } from '../../contexts/ListContext';
import { Route, Switch } from 'react-router-dom';
const List = React.lazy(() => import('../List/List'));

function App() {

  // const [array, setArray] = useState([]);


  const algorithm = new Algorithm(100000);
  const array = algorithm.renderArray()

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
              <React.Suspense fallback={<Spinner />}>
                <div>
                  <List array={array} />
                </div>
              </React.Suspense>
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
