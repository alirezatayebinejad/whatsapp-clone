import { Avatar, IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

function sidebar() {
	return (
		<Container>
			<Header>
				<DivLeft>
					<Avatar />
				</DivLeft>
				<DivRight>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</DivRight>
			</Header>
			<SearchContainer>
				<Search>
					<IconButton>
						<SearchIcon sx={{ fontSize: 20 }} />
					</IconButton>
					<InputSearch type="text" placeholder="Search..." />
				</Search>
			</SearchContainer>
		</Container>
	);
}
export default sidebar;

const Container = styled.div`
	flex: 0.3;
	background-color: white;
`;
const Header = styled.div`
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	border-bottom: solid 1px #f0f2f5;
`;
const DivLeft = styled.div``;
const DivRight = styled.div``;
const SearchContainer = styled.div`
	padding: 10px;
	border-bottom: solid 1px #f0f2f5;
`;
const Search = styled.div`
	background-color: #f0f2f5;
	border-radius: 10px;
`;
const InputSearch = styled.input`
	flex: 1;
	height: 35px;
	background-color: #f0f2f5;
	outline: none;
	border: none;
`;
