import React from "react";
import PropTypes from "prop-types";

function Currency(props) {
	return (
		<div id="currency_section" className="panel grid-item">
			<div onClick={() => props.whenCurrencyClicked(props.id)}>
				<h3>{props.name}</h3>
			</div>
		</div>
	)
}

Currency.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	country: PropTypes.string,
	id: PropTypes.string,
	whenCurrencyClicked: PropTypes.func
}

export default Currency;