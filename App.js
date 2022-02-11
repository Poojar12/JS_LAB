import React, { Component } from "react";
import axios from "axios";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inventory: [],
			selectedInventory: null,
		};
	}

	componentDidMount() {
		this.getInventory();
	}

	getInventory = () => {
		axios
			.get("http://localhost:5000/")
			.then((res) => this.setState({ inventory: res.data.inventory }))
			.catch((err) => console.log(err));
	};

	selectItem = (itemId) => {
		const selectedItem = this.state.inventory.find(
			(item) => item.itemId === itemId
		);

		if (selectedItem) {
			this.setState({ selectedInventory: selectedItem });
		}
	};

	render() {
		return (
			<div>
				<h1>List of Items from Inventory</h1>
				<table>
					<thead>
						<tr>
							<th>ItemId</th>
							<th>ItemName</th>
							<th>ItemPrice</th>
							<th>ItemDescription</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.state.inventory.map((item) => {
							return (
								<tr key={item.itemId}>
									<td>{item.itemId}</td>
									<td>{item.itemName}</td>
									<td>{item.itemPrice}</td>
									<td>{item.itemDescription}</td>
									<td>
										<span onClick={() => this.selectItem(item.itemId)}>
											View
										</span>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<hr />
				{this.state.selectedInventory && (
					<pre>{JSON.stringify(this.state.selectedInventory, null, 4)}</pre>
				)}
			</div>
		);
	}
}

export default App;
