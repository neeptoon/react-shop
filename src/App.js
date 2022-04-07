import Header from "./Components/Header";
import Shop from "./Components/Shop";
import Footer from "./Components/Footer";
import {ContextProvider} from "./context";


function App() {
	return (
		<>
			<Header/>
			<ContextProvider>
				<Shop/>
			</ContextProvider>
			<Footer/>
		</>
	);
}

export default App;
