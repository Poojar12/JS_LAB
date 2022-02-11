import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route path="/" component={Books} exact />
						<Route path="/add/book" component={AddBook} exact />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
