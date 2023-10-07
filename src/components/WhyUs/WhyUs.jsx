import './WhyUs.css'
import WhyUsArticle from '../ui/WhyUsArticle/WhyUsArticle'
import IconAPI from '../../assets/icon-api.svg'
import IconBudgetting from '../../assets/icon-budgeting.svg'
import IconOnBoarding from '../../assets/icon-onboarding.svg'
import IconOnline from '../../assets/icon-online.svg'


const WhyUs = () => {
	return (
		<div>
			<div className='why-header'>
				<h1>
					Why choose Easybank?
				</h1>
				<p>
					We leverage Open Banking to turn your bank account into your
					<br/>
					financial hub. Control your finances like never before. 
				</p>
				<div className='reasons'>
					<WhyUsArticle 
						icon={IconOnline}			
						alter='just icon'
						header='Online Banking'
						p='Our modern web and mobile applications allow 
						you to keep track of your finances wherever you are in the world. ' 
					/>
		
					<WhyUsArticle 
						icon={IconBudgetting}			
						alter='just icon'
						header='Simple Budgeting'
						p='See exactly where your money goes each month.
							Receive notifications when you’re close to hitting your limits. ' 
					/>

					<WhyUsArticle 
						icon={IconOnBoarding}			
						alter='just icon'
						header='Fast Onboarding'
						p='We don’t do branches. Open your account in minutes
							online and start taking control of your finances right away. ' 
					/>

					<WhyUsArticle 
						icon={IconAPI}			
						alter='just icon'
						header='Open API'
						p='Manage your savings, investments, pension, and much more from one account.
							Tracking your money has never been easier. ' 
					/>

				</div>
		</div>
		</div>
	)
}

export default WhyUs
