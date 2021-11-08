import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
	return (
		<form onSubmit={props.formSubmissionHandler}>
			<input
				type="text"
				name="name"
				required={true}
				placeholder="Currency name"/>
			<br />
			<textarea
				name="description"
				required={true}
				placeholder="Describe it"/>
			<br />
			<input
				type="text"
				name="country"
				required={true}
				placeholder="Country of origin"/>
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