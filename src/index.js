import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const Clock = ({ time, period }) => (
	<React.Fragment>
		<p>
			The time is {time}
			{period}
		</p>
	</React.Fragment>
);

class Forming extends Component {
	render() {
		return (
			<div>
				{this.props.formInput ? (
					<h2>Form input: {this.props.formInput}</h2>
				) : null}
				<form>
					<div>
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							name="name"
							id="userName"
							value={this.props.formInput}
							onChange={this.props.onForming}
						/>
					</div>
					<button type="submit" onClick={this.props.onSubmitForm}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

Forming.propTypes = {
	formInput: PropTypes.string.isRequired,
	onForming: PropTypes.func.isRequired,
	onSubmitForm: PropTypes.func.isRequired
};

Forming.defaultProps = {
	formInput: "yawa"
};

Clock.propTypes = {
	time: PropTypes.string.isRequired,
	period: PropTypes.string.isRequired
};
const Parent = ({ children }) => <React.Fragment>{children}</React.Fragment>;
const Baby = () => <div>I'm the baby</div>;

const Header = ({ children }) => <h2>{children}</h2>;
class App extends Component {
	state = {
		formInput: ""
	};

	onFormInput = e => {
		this.setState({
			formInput: e.target.value
		});
	};

	onSubmitForm = e => {
		e.preventDefault();
		this.setState({ formInput: "" });
		console.log(`submttied data: ${this.state.formInput}`);
	};
	render() {
		return (
			<div>
				<h1>Hello Play</h1>
				<Header>Hello Header</Header>
				<Clock time="12:49" period="AM" />
				<Parent>
					<Baby />
				</Parent>
				<Forming
					formInput={this.state.formInput}
					onForming={this.onFormInput}
					onSubmitForm={this.onSubmitForm}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
