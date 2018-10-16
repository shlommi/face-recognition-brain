import React from "react";

class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmitRegister = () => {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(user => {
        if (user) {
          this.props.handleRouteChange('home');
          this.props.loadUser(user);
          console.log(user)
        }
      })

  }

  render() {
    return (
      <article className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.handleNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handlePasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
                onClick={this.handleSubmitRegister}
              />
            </div>
          </div>
        </main >
      </article>
    );
  }

};

export default Register;
