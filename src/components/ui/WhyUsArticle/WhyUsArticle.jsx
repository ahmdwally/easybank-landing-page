import './WhyUsArticle.css'

const WhyUsArticle = (props) => {
	return (
		<div>
			<div className='contain'>
				<img src={props.icon} alt={props.alter} />
				<h2>
					{props.header}
				</h2>
				<p>
					{props.p}
				</p>
				</div>
		</div>
	)
};

export default WhyUsArticle
