import {useState} from "react";
import "./App.css";
import List from './Components/List';
function App() {
  const [currentItem, setCurrentItem]= useState("");
  const[itemList, updateItemList] = useState([]);
  const onChangeHandler = e =>{
    console.log("Input", e.target.value);
    setCurrentItem(e.target.value);
  };
  const addItemToList = () => {
   updateItemList([...itemList, {item: currentItem, key: Date.now()}]);
   setCurrentItem("");
  };
 return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <p> To-Do-List</p>
          <div className="Input-wrapper">
            <input value={currentItem} onChange = {onChangeHandler}/>
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList}/>
        </div>
      </header>
    </div>
  );
}

export default App;
