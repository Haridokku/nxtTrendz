import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmit = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />
        <form className="form-container" onSubmit={this.onSubmit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <label className="label-text" htmlFor="username-input">
            USERNAME
          </label>
          <input
            type="text"
            id="username-input"
            value={username}
            onChange={this.onChangeUsername}
            className="input-element"
            placeholder="Username"
          />
          <label className="label-text" htmlFor="password-input">
            PASSWORD
          </label>
          <input
            type="password"
            id="password-input"
            value={password}
            onChange={this.onChangePassword}
            className="input-element"
            placeholder="Password"
          />
          <button type="submit" className="button">
            Login
          </button>
          {showErrorMsg && <p className="description">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
