import React from 'react'

function Login() {
    const Input = ({ id, type, label, autocomplete }) => (
        <input className="form-group__input" type={type} id={id} placeholder={label} autocomplete={autocomplete}/>
    );
  return (
    <form >
        <div className="form-block__input-wrapper">
            <div className="form-group form-group--login">
                <Input type="text" id="username" label="user name" autocomplete="off"/>
                <Input type="password" id="password" label="password" autocomplete="off"/>
            </div>
        </div>
        <button className="button button--primary full-width" type="submit">Login</button>
    </form>
  )
}

export default Login
