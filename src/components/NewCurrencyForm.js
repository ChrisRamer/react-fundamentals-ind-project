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
			description: event.target.description.value,
			id: v4()
		});
	}

	return (
		<React.Fragment>
			<h3>Add new currency</h3>
			<ReusableForm
				formSubmissionHandler={handelNewCurrencyFormSubmission}
				buttonText="Add currency" />
		</React.Fragment>
	)
}

NewCurrencyForm.propTypes = {
	onNewCurrencyCreation: PropTypes.func
}

export default NewCurrencyForm;