import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import "./style/landingPage.css";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
	return (
		<div>
			{/* Intro Section */}
			<div className="myBG">
				<NavigationBar />
				<Intro />
			</div>
			{/* Intro End */}

			{/* Trending Section */}
			<div className="trending">
				<Trending />
				<Superhero />
			</div>
			{/* Trending End */}
		</div>
	);
}

export default App;
