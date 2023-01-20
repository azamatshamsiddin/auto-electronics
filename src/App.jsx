import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";

const theme = {
	mobile: "768px",
	tablet: "1160px",
};



function App() {


	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Header />
			</Container>
		</ThemeProvider>
	);
}

export default App;

const Container = styled.div`
	max-width: 1440px;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding: 0 15px;
`;
