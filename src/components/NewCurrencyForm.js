import React from "react";
import {v4} from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewCurrencyForm(props) {
	function handelNewCurrencyFormSubmission(event) {
		event.preventDefault();
		props.onNewCurrencyCreation({
			name: event.target.name.value,
			country: event.target.country.value,
			price: event.target.price.value,
			id: v4()
		});
	}

	return (
		<ReusableForm
			formSubmissionHandler={handelNewCurrencyFormSubmission}
			buttonText="Add currency" />
	)
}

NewCurrencyForm.propTypes = {
	onNewCurrencyCreation: PropTypes.func
}

export default NewCurrencyForm;