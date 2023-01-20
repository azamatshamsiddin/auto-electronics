import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

const Button = ({ children, text }) => {
	const [windowWidth, windowHeight] = useWindowSize();
	return (
		<StyledButton>
			{children}
			{windowWidth > 1180 && text}
		</StyledButton>
	);
};

export default Button;

const StyledButton = styled.button`
	color: #fcfcfc;
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	text-align: center;
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 12px 38px;
	border: 2px solid #f56e1e;
	border-radius: 12px;
	background: #f56e1e;
	cursor: pointer;

	svg {
		width: 22px;
		height: 22px;
	}
`;
