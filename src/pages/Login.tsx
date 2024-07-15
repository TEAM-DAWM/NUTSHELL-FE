import { GoogleLogin } from '@react-oauth/google';

function Login() {
	const responseMessage = (response) => {
		console.log(response);
	};
	const errorMessage = (error) => {
		console.log(error);
	};
	return <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />;
}

export default Login;
