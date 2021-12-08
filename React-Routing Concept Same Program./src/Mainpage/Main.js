import React, { useState } from 'react';
import './Main.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
function Main() {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [newItem, setNewItem] = useState(null);
  function addItem(event) {
    event.preventDefault();
    if (!data) {
      alert("Input can't be empty")
    }
    else if (data && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === newItem) {
            return { ...elem, name: data }
          }
          return elem;
        })
      )
      setToggleSubmit(true);
      setData("");
      setNewItem(null);
    }
    else {
      const allInput = { id: new Date().getTime().toString(), name: data }
      setItems([...items, allInput]);
      setData('');
    }
  }
  const deleteItem = (index) => {
    const updateItem = items.filter((elem) => index !== elem.id
    )
    setItems(updateItem);
  }
  const editItem = (id) => {
    let newEditItem = items.find((elem) => elem.id === id)
    setToggleSubmit(false);
    setData(newEditItem.name);
    setNewItem(id);
  }
  return (
    <div className="Main">
      <Header />
      <div className="Main-Input">

        <form onSubmit={addItem}>
          <label>Name: </label>
          <input type="text" placeholder="Enter Text" value={data} onChange={(e) => setData(e.target.value)} />
          {
            toggleSubmit ?
              <input type="submit" value="Submit" /> :
              <i className="fa fa-pencil-square-o fa-lg" onClick={addItem}></i>
          }
        </form>
      </div>
      <div className="display">
        {
          items.map((elem) => {
            return (
              <div className="display1" key={elem.id}>
                <h3>{elem.name}</h3>
                <div className="icons">
                  <i className="fa fa-pencil-square-o fa-lg" onClick={() => editItem(elem.id)}></i>&nbsp;
                  <i className="fa fa-trash fa-lg" onClick={() => deleteItem(elem.id)}></i>
                </div>
              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default Main;
