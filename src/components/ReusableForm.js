import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
	return (
		<form onSubmit={props.formSubmissionHandler}>
			<input
				type="text"
				name="name"
				placeholder="Currency name"/>
			<br />
			<textarea
				name="description"
				placeholder="Describe it"/>
			<br />
			<input
				type="text"
				name="country"
				placeholder="Country of origin"/>
			<br />
			$ <input
				type="number"
				min="0.01"
				step="0.01"
				name="price"
				placeholder="Price (in USD)"/>
			<br />
			<button type="submit">{props.buttonText}</button>
		</form>
	)
}

ReusableForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string
}

export default ReusableForm;