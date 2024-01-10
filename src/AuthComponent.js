import React from 'react';
import { AuthService } from './utils/authService';


const AuthButton = () => {
	const authService = new AuthService();
  return <button onClick={() => authService.login()}>Login with Google</button>;
};

export default AuthButton;