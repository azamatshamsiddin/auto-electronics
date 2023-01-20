import React from "react";
import { BsBookmark, BsCart2, BsPerson } from "react-icons/bs";
import styled from "styled-components";

export const MenuList = () => {
	return (
		<StyledList>
			<ListItem>
				<ListLink href="#">
					<BsCart2 />
					Корзина
				</ListLink>
			</ListItem>
			<ListItem>
				<ListLink href="#">
					<BsBookmark />
					Избранное
				</ListLink>
			</ListItem>
			<ListItem>
				<ListLink href="#">
					<BsPerson />
					Профиль
				</ListLink>
			</ListItem>
		</StyledList>
	);
};

const StyledList = styled.ul`
	display: flex;
	align-items: center;
	gap: 30px;
	list-style: none;
`;

const ListItem = styled.li`
	flex: 1;
`;

const ListLink = styled.a`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 4px;
	font-size: 12px;
	line-height: 16px;
	color: #6e7191;

	svg {
		width: 30px;
		height: 30px;
	}

	@media (max-width: ${({ theme }) => theme.tablet}) {
		font-size: 10px;
		line-height: 12px;
	}
`;
