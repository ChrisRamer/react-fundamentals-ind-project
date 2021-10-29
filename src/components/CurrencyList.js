import React from "react";
import Currency from "./Currency";
import PropTypes from "prop-types";

function CurrencyList(props) {
	return (
		{props.currencytList.map((currency) =>
			<Currency
				whenCurrencyClicked={props.onCurrencySelection}
				name={currency.name}
				price={currency.price}
				country={currency.country}
				id={currency.id}
				key={currency.id}/>
		)}
	)
}

CurrencyList.propTypes = {
	currencytList: PropTypes.array,
	onCurrencySelection: PropTypes.func
}

export default CurrencyList;