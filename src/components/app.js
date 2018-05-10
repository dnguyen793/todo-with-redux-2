import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import List from './list';
import AddForm from './add_form';

const App = () => (
    <div>
        <div className="container">
            <h1 className="center">To Do List</h1>
            <Route exact path="/" component={List}/>
            <Route exact path="/add-item" component={AddForm}/>

        </div>
    </div>
);

export default App;
