import './Articles.css'
import SingleArticle from '../ui/SingleArticle/SingleArticle'
import ImageCurrency from '../../assets/image-currency.jpg'
import ImageFood from '../../assets/image-restaurant.jpg'
import ImagePlane from '../../assets/image-plane.jpg'
import ImageConff from '../../assets/image-confetti.jpg'

const Articles = () => {
	return (
		<div>
			<div className='box'>
				<h2>Latest Articles</h2>
				<div className='articles'>
					<SingleArticle 
						image={ImageCurrency}
						by='By Claire Robinson'
						title='Receive money in any currency with no fees'
						text='The world is getting smaller and we’re becoming more mobile.
							So why should you be forced to only receive money in a single … '
					/>

					
					
					<SingleArticle 
						image={ImageFood}
						by='By Wilson Hutton'
						title='Treat yourself without worrying about money'
						text='Our simple budgeting feature allows you to
							separate out your spending and set realistic limits each month. That means you … '
					/>

					<SingleArticle 
						image={ImagePlane}
						by='By Wilson Hutton'
						title='Take your Easybank card wherever you go'
						text='We want you to enjoy your travels.
							This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … '
					/>

					<SingleArticle 
						image={ImageConff}
						by='By Claire Robinson'
						title='Our invite-only Beta accounts are now live!'
						text='After a lot of hard work by the whole team, we’re excited
							to launch our closed beta. It’s easy to request an invite through the site ... '
					/>


				</div>
			</div>
		</div>

	)
}

export default Articles
