import React from "react";
import PropTypes from "prop-types";

function Status(props) {
	return (
		<div id="status_section" className="panel">
			<h3>You have ${props.moneyToSpend}</h3>
			<h4>Your earnings: ${props.totalEarnings}</h4>
		</div>
	)
}

Status.propTypes = {
	moneyToSpend: PropTypes.number.isRequired,
	totalEarnings: PropTypes.number.isRequired
}

export default Status;