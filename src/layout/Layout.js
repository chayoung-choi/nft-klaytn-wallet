import React from "react";
import {Container, Navbar} from "react-bootstrap";
import Navi from "../navigation/Navigation";

const Layout = () => {

	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	return <>
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='#home'>{process.env.REACT_APP_NAME}</Navbar.Brand>
			</Container>
		</Navbar>
		<Navi />
	</>
}
export default Layout
