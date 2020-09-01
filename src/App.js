import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import People from './pages/people/People';
import './App.css';

function App() {
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/people" component={People} />
			</Switch>
		</div>
	);
};

export default App;