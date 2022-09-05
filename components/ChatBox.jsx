import React from "react";
import styled from "styled-components";

function ChatBox() {
	return <Container>you have no messages please start a new chat</Container>;
}

export default ChatBox;

const Container = styled.div`
	flex: 0.7;
	background-color: #f0f2f5;
	display: flex;
	justify-content: center;
	align-items: center;
`;
