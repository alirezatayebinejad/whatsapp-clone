import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
	const signIn = () => {
		signInWithPopup(auth, provider).catch(alert);
	};

	return (
		<Container>
			<Head>
				<title>Login Page</title>
			</Head>
			<SignInDiv>
				<LogoImg src="../../whatsapplogo.gif" />
				<ButtonDiv onClick={signIn}>
					<GoogleLogo src="../../googleicon.png" />
					<p>Sign in with Google</p>
				</ButtonDiv>
			</SignInDiv>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #00a884;
`;
const SignInDiv = styled.div`
	background-color: white;
	width: 300px;
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const LogoImg = styled.img`
	width: 150px;
`;
const ButtonDiv = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	cursor: pointer;
	margin-top: 30px;
	width: 90%;
	:active {
		transition: 0.3s;
		background-color: gray;
	}
`;
const GoogleLogo = styled.img`
	width: 30px;
	height: 30px;
	margin-right: 10px;
`;
