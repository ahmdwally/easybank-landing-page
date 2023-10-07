import './Invitation.css'
import bg from '../../assets/bg-intro-desktop.svg'
import image from '../../assets/image-mockups.png'
import Button from '../ui/Button/Button'

const Invitation = () => {
	return(
		<div>
			<div className='img-con'>
				<img className='bg' src={bg} alt='background'></img>
				<img className='mockups' src={image} alt='background'></img>
			</div>
		<div className='header'>
			<h1>
				Next generation 
				<br />
				digital banking
			</h1>
			<p>
				Take your financial life online. Your Easybank account will be a one
				-stop-shop for spending, saving, budgeting, investing, and much more. 
			</p>
			<Button />
		</div>
		</div>
	)
}

export default Invitation
