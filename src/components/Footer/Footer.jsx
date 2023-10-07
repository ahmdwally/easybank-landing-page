import './Footer.css'
import IconFooter from '../../assets/logo-footer.svg'
import FaceBook from '../../assets/icon-facebook.svg'
import YouTube from '../../assets/icon-youtube.svg'
import Twitter from '../../assets/icon-twitter.svg'
import Pintrest from '../../assets/icon-pinterest.svg'
import Insta from '../../assets/icon-instagram.svg'
import Button from '../ui/Button/Button'

const Footer = () => {
	return (
		<div>
			<div className='footer'>
				<div className='left'>
					<img src={IconFooter} alt='logo'></img>
					<div className='social'>
						<img alt='facebook' src={ FaceBook }></img>
						<img alt='youtube' src={ YouTube }></img>
						<img alt='twitter' src={ Twitter }></img>
						<img alt='pinterest' src={ Pintrest }></img>
						<img alt='instagram' src={ Insta }></img>
					</div>
				</div>
				<div className='middle'>
					<div className='middle-left'>
						<a href='.navbar-container'>About Us</a>
						<a href='.navbar-container'>Blog</a>
						<a href='.navbar-container'>Support</a>
					</div>
					<div className='middle-right'>
						<a href='.navbar-container'>Contact</a>
						<a href='.navbar-container'>Careers</a>
						<a href='.navbar-container'>Privacy Policy</a>
					</div>
				</div>
				<div className='right'>
					<Button />
					<span>© Easybank. All Rights Reserved </span>
				</div>
			</div>
		</div>
	)
}

export default Footer
