import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const SearchBox = () => {
	return (
		<SearchWrapper>
			<InputSearch type="text" placeholder="Я ищу" />
			<BsSearch />
		</SearchWrapper>
	);
};

export default SearchBox;

const SearchWrapper = styled.label`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 12px;
	gap: 191px;
	flex: 1;
	height: 54px;

	background: #ffffff;
	border: 1px solid #a0a3bc;
	border-radius: 12px;
	color: #a0a3bc;

	svg {
		width: 20px;
		height: 20px;
	}
`;

const InputSearch = styled.input`
	font-family: "Golos Text", sans-serif;
	outline: none;
	border: none;
	height: 100%;
	font-size: 16px;
	line-height: 16px;
	color: #000;

	&::placeholder {
		font-size: 16px;
		line-height: 16px;
		color: #a0a3bc;
	}
`;
