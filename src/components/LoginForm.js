import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../store/auth';
import routes from '../configs/routes';
import  './LoginForm.css'

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const isAuth = useSelector(state => state.auth.isAuth);
  const isError = useSelector(state => state.auth.isError);
  const dispatch = useDispatch();

  const onFormSubmitted = data => {
    dispatch(authActions.login(data));
  }

  if (isAuth) {
    return <Redirect to={routes.CHARACTERS} />
  }

  return (
    <div className="container-fluid form-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit(onFormSubmitted)} className="form-signin">

          <div className="form-group">
            <label htmlFor="login"><span>*</span>Login</label>
            <input
              ref={register}
              type="login"
              className="form-control"
              id="login"
              name="login"
              aria-describedby="loginHelp"
              aria-required="true"
              aria-invalid="true"
              required />
          </div>
          <div className="form-group">
            <label htmlFor="password"><span>*</span>Password</label>
            <input
              ref={register}
              type="password"
              name="password"
              className="form-control"
              id="password"
              aria-required="true"
              aria-invalid="true"
              required/>

          </div>
          {false && <div className="alert alert-danger small">Some error</div>}
          <div className="text-danger mb-3">{isError}</div>
          <button type="submit" className="btn btn-lg btn-primary btn-block">Login</button>
      </form>
    </div>

  )
}

export default LoginForm
