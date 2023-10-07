import './App.css' 
import NavBar from '../components/NavBar/NavBar';
import Invitation from '../components/Invitation/Invitation';
import WhyUs from '../components/WhyUs/WhyUs'
import Articles from '../components/Articles/Articles'
import Footer from '../components/Footer/Footer'

const App = () => {
	return (
		<div>
		<div className='container'>
			<NavBar />
			<Invitation />
			<div className='whyus'>
				<WhyUs />
			</div>
		</div>
		<Articles />
		<Footer />
		</div>

	)
}

export default App;
