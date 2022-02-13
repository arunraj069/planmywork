import React from 'react';
import "../../../assets/Auth.scss";
import Login from './Login';
import { useState } from 'react';
import Register from './Register';
export function Auth() {
  const [mode, setMode] = useState('login');
  return (
    <div className={`app app--is-${mode}`}>
    <div>
        <div className={`form-block-wrapper form-block-wrapper--is-${mode}`} ></div>
        <section className={`form-block form-block--is-${mode}`}>
            <header className="form-block__header">
                <h1>{mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
                <div className="form-block__toggle-block">
                    <span>{mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
                    <input id="form-toggler" type="checkbox" onClick={()=>setMode(mode === 'login'? 'signup':'login')} />
                    <label htmlFor="form-toggler"></label>
                </div>
            </header>
            { mode === 'login' ? <Login/> : <Register/>}
        </section>
    </div>
    </div>
  );
}

