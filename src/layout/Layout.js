import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Navi from '../navigation/Navigation'
import Router from '../router/Router'

const Layout = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	return (
		<>
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='#home'>{process.env.REACT_APP_NAME}</Navbar.Brand>
				</Container>
			</Navbar>
			<div className='d-flex align-items-stretch vh-90'>
				<div style={{ width: '200px', minHeight: '90vh' }}>
					<Navi />
				</div>
				<Container className='bg-light w-100'>
					<Router />
				</Container>
			</div>
		</>
	)
}
export default Layout
