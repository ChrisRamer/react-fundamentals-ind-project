import React from "react";
import NewCurrencyForm from "./NewCurrencyForm";
import CurrencyList from "./CurrencyList";
import CurrencyDetail from "./CurrencyDetail";

class CurrencyControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			masterCurrencyList: [],
			selectedCurrency: null
		};
	}

	handleClick = () => {
		if (this.state.selectedCurrency != null) {
			this.setState({
				formVisibleOnPage: false,
				selectedCurrency: null
			});
		} else {
			this.setState(prevState => ({
				formVisibleOnPage: !prevState.formVisibleOnPage
			}));
		}
	}

	handleDeletingCurrency = (id) => {
		const newMasterCurrencyList = this.state.masterCurrencyList.filter(currency => currency.id !== id);
		this.setState({
			masterCurrencyList: newMasterCurrencyList,
			selectedCurrency: null
		});
	}

	handleAddingNewCurrencyToList = (newCurrency) => {
		const newMasterCurrencyList = this.state.masterCurrencyList.concat(newCurrency);
		this.setState({
			masterCurrencyList: newMasterCurrencyList,
			formVisibleOnPage: false
		});
	}

	handleChangingSelectedCurrency = (id) => {
		const selectedCurrency = this.state.masterCurrencyList.filter(currency => currency.id === id)[0];
		this.setState({selectedCurrency: selectedCurrency});
	}

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;

		if (this.state.selectedCurrency != null) {
			currentlyVisibleState = <CurrencyDetail
				currency = {this.state.selectedCurrency}
				onClickingDelete = {this.handleDeletingCurrency} />;
			buttonText = "Return to currency list";
		} else if (this.state.formVisibleOnPage) {
			currentlyVisibleState = <NewCurrencyForm onNewCurrencyCreation={this.handleAddingNewCurrencyToList} />;
			buttonText = "Return to currency list";
		} else {
			currentlyVisibleState = <CurrencyList currencyList={this.state.masterCurrencyList} onCurrencySelection={this.handleChangingSelectedCurrency} />;
			buttonText = "Add new currency";
		}

		return (
			<React.Fragment>
				{currentlyVisibleState}
				<button onClick={this.handleClick}>{buttonText}</button>
			</React.Fragment>
		);
	};
}

export default CurrencyControl;