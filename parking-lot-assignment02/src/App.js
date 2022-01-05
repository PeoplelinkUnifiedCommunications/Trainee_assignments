import SearchBar from "./Components/Search_container";
import FormContainer from "./Components/Form_container";
import SlotGenrator from "./Components/Slot_genrator";
import Footter from "./Components/Footer";
import Tabel from "./Components/tabel";
import "./App.css";

function App() {
  return (
    <div className="bg_container">
      <SearchBar />
      <div>
        <div className="card_container">
      
          <div className="user_fileds_container">
            <FormContainer />
            <div className="slot_genrate_container">
              <SlotGenrator />
            </div>
            </div>
        
          <div className="table_contaier">
            <div className="inner">
              <Tabel />
            </div>
          </div>
        </div>

        <Footter />
      </div>
    </div>
  );
}

export default App;
