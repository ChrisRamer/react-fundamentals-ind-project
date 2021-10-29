import React from "react";
import PropTypes from "prop-types";

function Currency(props) {
	return (
		<div onClick = {() => props.whenCurrencyClicked(props.id)}>
			<h3>{props.currency}</h3>
		</div>
	)
}

Currency.propTypes = {
	currency: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	country: PropTypes.string,
	id: PropTypes.string,
	whenCurrencyClicked: PropTypes.func
}

export default Currency;