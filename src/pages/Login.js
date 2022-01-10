import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin as loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateData = this.validateData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }

  validateData(email, password) {
    const minPasswordLenghtValue = 6;
    if (password.length >= minPasswordLenghtValue
      && email.includes('@')
      && email.endsWith('.com')) {
      return true;
    }
    return false;
  }

  handleClick() {
    const { loginDispatch, history } = this.props;
    const { email } = this.state;
    loginDispatch(email);
    history.push('./carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email-input">
          Email
          {' '}
          <input
            data-testid="email-input"
            name="email"
            type="email"
            value={ email }
            onChange={ this.handleChange }
            id="email-input"
          />
        </label>
        <label htmlFor="password-input">
          Senha
          {' '}
          <input
            data-testid="password-input"
            name="password"
            type="password"
            value={ password }
            onChange={ this.handleChange }
            id="password-input"
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ !this.validateData(email, password) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (email) => dispatch(loginAction({ email })),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape([]).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
