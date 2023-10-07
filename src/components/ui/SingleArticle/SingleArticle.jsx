import './SingleArticle.css'

const SingleArticle = (props) => {
	return (
		<div>
			<div className='card'>
				<img src={props.image} alt='just a article'></img>
				<div className='text'>
					<h6>{props.by}</h6>
					<a href='.navbar-container'>{props.title}</a>
					<p>{props.text}</p>
				</div>
			</div>
		</div>
	)
};

export default SingleArticle


