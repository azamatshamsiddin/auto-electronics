import React, { useRef, useState } from "react";
import styled from "styled-components";
import flagRus from "../assets/flag-rus.svg";
import flagChina from "../assets/flag-china.svg";
import { FiChevronDown } from "react-icons/fi";

const options = [
	{ id: 1, title: "RU" },
	{ id: 2, title: "日本語" },
];

const Nav = () => {
	const [langValue, setLangValue] = useState("RU");
	const [showLang, setShowLang] = useState(false);


	const handleLangChange = (e) => {
		setLangValue(e.target.title);
	};

	return (
		<StyledNav>
			<Description>Динамично. Надежно. Доступно.</Description>
			<SelectContainer onMouseEnter={() => {
						setShowLang(true);
					}}
					onMouseLeave={()=>{
						setShowLang(false);
					}}
					>
				<SelectValue

				>
					<img src={langValue === "RU" ? flagRus : flagChina} alt="flag image" />
					{langValue}
					<Icon rotate={showLang.toString()}>
						<FiChevronDown />
					</Icon>
				</SelectValue>
				{showLang && (
					<SelectWrapper onMouseEnter={()=>setShowLang(true)} onMouseLeave={()=>setShowLang(false)}>
						{options.map(({ id, title }) => (
							<StyledSelect onClick={handleLangChange} key={id} title={title}>
								<img src={title === "RU" ? flagRus : flagChina} alt="flag image" />
								{title}
							</StyledSelect>
						))}
					</SelectWrapper>
				)}
			</SelectContainer>
		</StyledNav>
	);
};

export default Nav;

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	margin-top: 18px;
`;
const Description = styled.p`
	font-weight: 700;
	font-size: 9px;
	line-height: 11px;
	color: #a0a3bd;
	padding: 8px 13px;
	text-align: center;
	background-color: #f1f1f1;
	border-radius: 40px;
`;

const SelectContainer = styled.div`
	position: relative;
`;

const SelectWrapper = styled.div`
	position: absolute;
	width: 95px;
	top: 38px;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 4px;
	padding: 4px;
	background: #ffffff;
	box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.2);
	border-radius: 12px;
`;

const SelectValue = styled.div`
	position: relative;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	gap: 4px;
	color: #6e7191;
	padding: 4px 8px;
	border-radius: 8px;
	cursor: pointer;
	transition: all ease 0.3s;

	&::after {
		position: absolute;
	}

	img {
		border: 1px solid #6e7191;
		border-radius: 50%;
	}

	&:hover {
		background: #f1f1f1;
		color: #f56e1e;
	}
`;

const Icon = styled.span`
	svg {
		transform: ${({ rotate }) => (rotate === "true" ? "rotate(180deg)" : null)};
		margin-top: 2px;
		width: 18px;
		height: 18px;
	}
`;

const StyledSelect = styled.div`
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	gap: 4px;
	width: 100%;
	color: #6e7191;
	padding: 4px 8px;
	border-radius: 8px;
	cursor: pointer;
	transition: all ease 0.3s;
	img {
		pointer-events: none;
		border: 1px solid #6e7191;
		border-radius: 50%;
	}

	&:hover {
		background: #f56e1e;
		color: #fff;

		img {
			border-color: #fff;
		}
	}
`;
