import React from "react";
import Currency from "./Currency";
import PropTypes from "prop-types";

function CurrencyList(props) {
	return (
		<React.Fragment>
			{props.currencyList.map((currency) =>
				<Currency
					whenCurrencyClicked={props.onCurrencySelection}
					name={currency.name}
					price={currency.price}
					country={currency.country}
					id={currency.id}
					key={currency.id}/>
			)}
		</React.Fragment>
	)
}

CurrencyList.propTypes = {
	currencyList: PropTypes.array,
	onCurrencySelection: PropTypes.func
}

export default CurrencyList;