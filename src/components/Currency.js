import React from "react";
import PropTypes from "prop-types";

function Currency(props) {
	return (
		<div id="currency_section" className="panel grid-item">
			<div onClick={() => props.whenCurrencyClicked(props.id)}>
				<h3>{props.name}</h3>
			</div>
			<p><i>{props.description}</i></p>
			<p>Origin: {props.country}</p>
			<br />
			<p>Conversion rate: $ {props.price}</p>
		</div>
	)
}

Currency.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string,
	country: PropTypes.string,
	price: PropTypes.number.isRequired,
	whenCurrencyClicked: PropTypes.func,
	id: PropTypes.string
}

export default Currency;