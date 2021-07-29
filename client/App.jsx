import React, { useState, useEffect, useData } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  RouteComponentProps
} from "react-router-dom";
import ImagesDisplay from './components/ImagesDisplay.jsx';
import InnerPageDisplay from './components/InnerPageDisplay.jsx';
import DataContextProvider from './contexts/DataContext.jsx';



function App (){
  //get data
  const [data, setData] = useState([]);

  useEffect( () => {
      fetch('http://localhost:3000/data')
      .then(res => res.json())
      .then(data => {
        setData(data)
        console.log(data)})
      .catch((err) => {
        return ("Error: ", err)
      })
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <ImagesDisplay />} />
        <Route path='/1' render={(props) => <InnerPageDisplay key={props.match.params} giveme={data}/>}/>
      </Switch>
    </Router>
  );
};





export default App;