import './NavBar.css'
import Button from '../ui/Button/Button'
import NavBarLink from '../ui/NavBarLink/NavBarLink'
import icon from '../../assets/logo.svg'

const NavBar = () => {
	return (
		<div className='navbar-container'>
			<img className='img-nav' src={icon} alt='icon' ></img>
			<div className='links'>
				<NavBarLink name="Home" />
				<NavBarLink name="About" />
				<NavBarLink name="Contact" />
				<NavBarLink name="Blog" />
				<NavBarLink name="Careers" />
			</div>
			<Button />
		</div>
	)
}

export default NavBar
