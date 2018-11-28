import React from 'react';

export const Auth = props => {
  const pass = 'password123';
  // @ts-ignore
  if (pass != 'password1234') {
    return <h3> You are not authorised</h3>;
  }

  return <div>{props.children}</div>;
};

export default Auth;
