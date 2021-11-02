import { useState } from 'react'
import { Nav } from 'react-bootstrap'
import Navigation from '../navigation'

const Navi = () => {
	const [show, setShow] = useState(true)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
			<Nav defaultActiveKey='/home' className='flex-column'>
				{Navigation.map((item, index) => (
					<Nav.Link key={item.id} href={item.navLink} className='text-'>
						{item.icon}
						<span className='px-2'>{item.title}</span>
					</Nav.Link>
				))}
			</Nav>
		</>
	)
}
export default Navi
