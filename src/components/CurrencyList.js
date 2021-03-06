import React from "react";
import Currency from "./Currency";
import PropTypes from "prop-types";

function CurrencyList(props) {
	if (props.currencyList.length < 1) {
		return (
			<p>You have not added any currencies. Would you like to add one?</p>
		)
	} else {
		return (
			<React.Fragment>
				<div className="grid-container">
					{props.currencyList.map((currency) =>
						<Currency
							whenCurrencyClicked={props.onCurrencySelection}
							name={currency.name}
							description={currency.description}
							country={currency.country}
							quantity={currency.quantity}
							handleClickBuy={props.onCurrencyBought}
							moneyToSpend={props.moneyToSpend}
							totalEarnings={props.totalEarnings}
							currencyObj={currency}
							id={currency.id}
							key={currency.id} />
					)}
				</div>
			</React.Fragment>
		)
	}
}

CurrencyList.propTypes = {
	currencyList: PropTypes.array,
	onCurrencySelection: PropTypes.func,
	onCurrencyBought: PropTypes.func,
	moneyToSpend: PropTypes.number,
	totalEarnings: PropTypes.number,
	quantity: PropTypes.number
}

export default CurrencyList;