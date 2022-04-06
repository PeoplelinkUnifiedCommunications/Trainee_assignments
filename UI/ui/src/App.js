import BodyContainer from "./bodyContainer/BodyContainer";
import Header from "./header/Header";


function App() {
  return (
    <div className="baseContainer flexCol">
      <Header />
      <div>
        <BodyContainer />
      </div>
    </div>
  );
}

export default App;
