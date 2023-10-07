import './NavBarLink.css'

const NavBarLink = (props) => {
	return (
		<div>
			<div className='link-container'>
					{props.name}
			</div>
		</div>
	)
}

export default NavBarLink
