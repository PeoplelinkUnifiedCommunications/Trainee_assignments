import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Form from "./components/form ";
import Genslots from "./components/genslot";
import "./App.css";

function App() {
	return (
		<div className='main-container'>
			<Navbar />
			<div className='main-page'>
				<Form />
				<Genslots />
			</div>
			<Footer />
		</div>
	);
}

export default App;
