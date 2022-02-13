import React from 'react'

const Register = () => {
    const Input = ({ id, type, label, autocomplete }) => (
        <input className="form-group__input" type={type} id={id} placeholder={label} autocomplete={autocomplete}/>
    );
  return (
    <form>
    <div className="form-block__input-wrapper">
        <div className="form-group form-group--signup">
            <Input type="text" id="fullname" label="full name" autocomplete="off"/>
            <Input type="email" id="email" label="email" autocomplete="off"/>
            <Input type="password" id="createpassword" label="password" autocomplete="off"/>
            <Input type="password" id="repeatpassword" label="repeat password"  autocomplete="off"/>
        </div>
    </div>
    <button className="button button--primary full-width" type="submit">Register</button>
</form>
  )
}

export default Register
