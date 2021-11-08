import React from "react";
import PropTypes from "prop-types";

function CurrencyDetail(props) {
	const {currency, onClickingDelete} = props;

	return (
		<React.Fragment>
			<h1>Currency Detail</h1>
			<h3>{currency.name}</h3>
			<p>Country of origin: {currency.country}</p>
			<button onClick={() => onClickingDelete(currency.id)}>Delete currency</button>
			<hr />
		</React.Fragment>
	)
}

CurrencyDetail.propTypes = {
	currency: PropTypes.object,
	onClickingDelete: PropTypes.func
}

export default CurrencyDetail;