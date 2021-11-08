import React from "react";
import PropTypes from "prop-types";

function getRandomCurrencyValue() {
	return Math.floor(Math.random() * 25);
}

function Currency(props) {
	const outOfStock = props.quantity < 1;
	const stockText = !outOfStock ? props.quantity + " in stock" : "out of stock";
	const stockTextColor = !outOfStock ? "green" : "red";
	const restockBtn = !outOfStock ? null : <button type="submit">Restock</button>;
	const buyBtn =  !outOfStock ? <button type="submit" onClick={() => props.handleClickBuy(props.price, getRandomCurrencyValue())}>Buy 1</button> : null;

	return (
		<div id="currency_section" className="panel grid-item">
			<div onClick={() => props.whenCurrencyClicked(props.id)}>
				<h3>{props.name}</h3>
			</div>
			<p><i>{props.description}</i></p>
			<p>Origin: {props.country}</p>
			<br />
			<div id="bottom-row">
				<div id="left-corner">
					<b style={{ color: stockTextColor }}>{stockText}</b>
					<br></br>
					{restockBtn}
				</div>
				<div id="right-corner">
					<b>${props.price}</b>
					<br></br>
					{buyBtn}
				</div>
			</div>
		</div>
	)
}

Currency.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string,
	country: PropTypes.string,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	whenCurrencyClicked: PropTypes.func.isRequired,
	handleClickBuy: PropTypes.func.isRequired,
	moneyToSpend: PropTypes.number,
	totalEarnings: PropTypes.number,
	id: PropTypes.string
}

export default Currency;