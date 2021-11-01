import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
	return (
		<form onSubmit={props.formSubmissionHandler}>
			<input
				type="text"
				name="name"
				placeholder="Currency name"/>
			<input
				type="text"
				name="country"
				placeholder="Country of origin"/>
			<input
				type="number"
				name="price"
				placeholder="price"/>
			<button type="submit">{props.buttonText}</button>
		</form>
	)
}

ReusableForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string
}

export default ReusableForm;