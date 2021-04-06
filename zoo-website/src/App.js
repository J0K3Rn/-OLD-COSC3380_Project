import React, { Component } from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import AnimalForm from './pages/AnimalForm'

class App extends Component {
  constructor(props) {
	  super(props);
	  this.state = { apiResponse: "" };
  }

  callAPI() {
	  fetch("http://localhost:9000/testAPI")
	      .then(res => res.text())
	      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
	  this.callAPI();
  }

  render() {
	  return (
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
			<div className="navbar-nav mr-auto">
				<li className="nav-item">
				<Link to={"/AnimalForm"} className="nav-link">
					AnimalForm
				</Link>
				</li>
			</div>
			</nav>
			<div className="App">
			<header className="App-header">
				<Switch>
					<Route exact path="/AnimalForm" component={AnimalForm}></Route>
				</Switch>
			</header>
			</div>
		</div>
	  );
  }
}

export default App;
