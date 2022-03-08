import InputSection from "./containers/inputSection";
import ProductSection from "./containers/productSection";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

function App() {
	const productData = [
		{
			name: "Rheem",
			rating: "3.4 ef",
			type: "Performance Platinum 50",
			basePrice: "$1,799",
			fedTaxCredit: "-$300",
			incentives: "-$1000",
			eqpCost: "$499",
			image: img1,
			capacity: 50,
		},
		{
			name: "A.O.Smith",
			rating: "3.4 ef",
			type: "Elite Master 56",
			basePrice: "$1,899",
			fedTaxCredit: "-$300",
			incentives: "-$1000",
			eqpCost: "$599",
			image: img2,
			capacity: 56,
		},
		{
			name: "Stiebel Eltron",
			rating: "3.4 ef",
			type: "Hybrid Electric 50",
			basePrice: "$2,199",
			fedTaxCredit: "-$300",
			incentives: "-$1000",
			eqpCost: "$899",
			image: img3,
			capacity: 50,
		},
	];
	return (
		<>
			<InputSection />
			<ProductSection productData={productData} />
		</>
	);
}

export default App;
