import React from "react";
import styled from "styled-components";

const Logo = ({ logoImg, href }) => {
	return (
		<StyledLogo href={href}>
			<img src={logoImg} alt="logo" />
		</StyledLogo>
	);
};

export default Logo;

const StyledLogo = styled.a``;
