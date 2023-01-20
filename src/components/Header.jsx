import styled from "styled-components";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
import Logo from "./Logo";
import { MenuList } from "./MenuList";
import SearchBox from "./SearchBox";


const Header = () => {
	return (
		<StyledHeader>
			<Flex gap={"30px"} align={"center"} justify={"space-between"}>
				<Logo href="/" logoImg={logo} />
				<Button text={"Каталог"}>
					<GiHamburgerMenu />
				</Button>
				<SearchBox />
				<MenuList />
			</Flex>

			{/* <nav className="nav">
					<p>Динамично. Надежно. Доступно.</p>
					<select name="lang" id="lang">
						<option>rus</option>
					</select>
					<ul className="nav__list">
						<li className="nav__item">О компании</li>
						<li className="nav__item">Клиентам</li>
						<li className="nav__item font-test">Client</li>
						<li className="nav__item">Сотрудничество</li>
						<li className="nav__item">Контакты</li>
					</ul>

					<ul className="social__list">
						<li className="social__item">Telegram</li>
						<li className="social__item">VKontakte</li>
					</ul>
					<select name="tel" id="tel">
						<option>8 (800) 455-45-11</option>
					</select>
					<button className="btn font-test">"Icon" Заказть звонок</button>
				</nav> */}
		</StyledHeader>
	);
};

export default Header;

export const Flex = styled.div`
	display: flex;
	flex-direction:${({ direction }) => direction || "row"};
	align-items: ${({ align }) => align || "stretch"};
	justify-content: ${({ justify }) => justify || "stretch"};
	gap: ${({ gap }) => gap || null};
`;

const StyledHeader = styled.header`
	padding: 10px;
`;
