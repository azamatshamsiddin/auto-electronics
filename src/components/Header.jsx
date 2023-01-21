import styled from "styled-components";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
import Logo from "./Logo";
import { MenuList } from "./MenuList";
import SearchBox from "./SearchBox";
import Nav from "./Nav";


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

			<Nav/>
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
