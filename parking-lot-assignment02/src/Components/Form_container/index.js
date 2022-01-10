import "./index.css";
import { useState } from "react";
import { connect } from "react-redux";
import { addData, editAvailabelData } from "../Redux/action";
import { v4 } from "uuid";
import { useEffect, useRef } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const FormContainer = ({ appState, addNewData, addUpdateData }) => {
  console.log(appState);
  const data = useRef("");
  const [userFileds, setuserFileds] = useState({
    ownerName: "",
    registraionNumber: "",
    color: "",
    slotNumber: "",
    carOrBike: "",
  });

  const [requiredFileds, setrequiredFileds] = useState({
    ownerField: "",
    registrationField: "",
    colorField: "",
    slotNumberField: "",
  });

  const ownerNameInput = (e) => {
    setuserFileds((prevState) => ({
      ...prevState,
      ownerName: e.target.value,
    }));
    setrequiredFileds((prevState) => ({
      ...prevState,
      ownerField: "",
    }));
  };
  const registraionNumberInput = (e) => {
    setuserFileds((prevState) => ({
      ...prevState,
      registraionNumber: e.target.value,
    }));
    setrequiredFileds((prevState) => ({
      ...prevState,
      registrationField: "",
    }));
  };
  const colorInput = (e) => {
    setuserFileds((prevState) => ({
      ...prevState,
      color: e.target.value,
    }));
    setrequiredFileds((prevState) => ({
      ...prevState,
      colorField: "",
    }));
  };
  const slotInput = (e) => {
    setuserFileds((prevState) => ({
      ...prevState,
      slotNumber: e.target.value,
    }));
    setrequiredFileds((prevState) => ({
      ...prevState,
      slotNumberField: "",
    }));
  };

  const onChangeCar = (e) => {
    console.log(e.target.value);

    setuserFileds((prevState) => ({
      ...prevState,
      carOrBike: e.target.value,
    }));
  };

  const onChangeBike = (e) => {
    console.log(e.target.value);
    setuserFileds((prevState) => ({
      ...prevState,
      carOrBike: e.target.value,
    }));
  };

  const onsubmit = (e) => {
    e.preventDefault();
    let newData;

    if (appState.isEdit) console.log(appState.editSlot[0].id);

    appState.isEdit
      ? (newData = {
          id: appState.editSlot[0].id,
          ownerName: userFileds.ownerName,
          registraionNumber: userFileds.registraionNumber.toUpperCase(),
          color: userFileds.color,
          slotNum: userFileds.slotNumber,
          carOrBike: userFileds.carOrBike,
        })
      : (newData = {
          id: v4(),
          ownerName: userFileds.ownerName,
          registraionNumber: userFileds.registraionNumber.toUpperCase(),
          color: userFileds.color,
          slotNum: userFileds.slotNumber,
          carOrBike: userFileds.carOrBike,
        });

    const availbelOrNot = appState.userVehicalData.find(
      (each) => each.slotNum === userFileds.slotNumber
    );
    const registarationNumAvailbelOrNot = appState.userVehicalData.find(
      (each) => each.registraionNumber === userFileds.registraionNumber
    );
    console.log(availbelOrNot);
    if (userFileds.ownerName === "") {
      setrequiredFileds((prevState) => ({
        ...prevState,
        ownerField: "Required",
      }));
    }
    if (userFileds.registraionNumber === "") {
      setrequiredFileds((prevState) => ({
        ...prevState,
        registrationField: "Required",
      }));
    }
    if (userFileds.color === "") {
      setrequiredFileds((prevState) => ({
        ...prevState,
        colorField: "Required",
      }));
    }
    if (userFileds.slotNumber === "") {
      setrequiredFileds((prevState) => ({
        ...prevState,
        slotNumberField: "Required",
      }));
    } else if (userFileds.ownerName.match(/^[A-Za-z ]+$/) === null) {
      setrequiredFileds((prevState) => ({
        ...prevState,
        ownerField: "field formate is wrong",
      }));
    } else if (
      userFileds.registraionNumber.match(
        /^[A-Za-z]{2}[0-9]{2}(-)[A-Za-z]{2}(-)[0-9]{4}$/
      ) === null
    ) {
      setrequiredFileds((prevState) => ({
        ...prevState,
        registrationField: "Registaration number formate is wrong",
      }));
    } else if (
      registarationNumAvailbelOrNot &&
      appState.editSlot[0] !== undefined &&
      appState.editSlot[0].registraionNumber !== userFileds.registraionNumber
    ) {
      console.log("dfyudfit7");
      setrequiredFileds((prevState) => ({
        ...prevState,
        registrationField: "Registaration number is availbel",
      }));
    } else if (
      registarationNumAvailbelOrNot &&
      appState.editSlot[0] === undefined
    ) {
      console.log("dfyudfit7");
      setrequiredFileds((prevState) => ({
        ...prevState,
        registrationField: "Registaration number is availbel",
      }));
    } else if (userFileds.color.match(/^[A-Za-z]+$/) === null) {
      setrequiredFileds((prevState) => ({
        ...prevState,
        colorField: "field formate is wrong",
      }));
    } else if (userFileds.slotNumber.match(/^[0-9]+$/) === null) {
      setrequiredFileds((prevState) => ({
        ...prevState,
        slotNumberField: "Please enter number",
      }));
    } else if (appState.slots === 0) {
      alert("Genrate slots first");
    } else if (
      newData.slotNum > appState.slots &&
      appState.userVehicalData.length === appState.slots
    ) {
      alert("No more slots availbel");
    } else if (
      !(
        parseInt(newData.slotNum) > 0 &&
        parseInt(newData.slotNum) <= appState.slots
      )
    ) {
      setrequiredFileds((prevState) => ({
        ...prevState,
        slotNumberField: `Enter slots in ${1} to ${appState.slots}`,
      }));
    } else if (
      availbelOrNot &&
      appState.editSlot[0] !== undefined &&
      appState.editSlot[0].slotNum !== userFileds.slotNumber
    ) {
      alert(`Slot ${userFileds.slotNumber} is filled`);
    } else if (availbelOrNot && appState.editSlot[0] === undefined) {
      alert(`Slot ${userFileds.slotNumber} is filled`);
    } else if (
      userFileds.ownerName !== "" &&
      userFileds.registraionNumber !== "" &&
      userFileds.color !== "" &&
      userFileds.slotNumber !== ""
    ) {
      appState.isEdit ? addUpdateData(newData) : addNewData(newData);

      setuserFileds((prevState) => ({
        ...prevState,
        ownerName: "",
        registraionNumber: "",
        color: "",
        slotNumber: "",
        carOrBike: "",
      }));
    }
  };
  useEffect(() => {
    if (appState.editSlot.length !== 0) {
      setuserFileds({
        ownerName: appState.editSlot[0].ownerName,
        registraionNumber: appState.editSlot[0].registraionNumber,
        color: appState.editSlot[0].color,
        slotNumber: appState.editSlot[0].slotNum,
      });
    }

    setrequiredFileds({
      ownerField: "",
      registrationField: "",
      colorField: "",
      slotNumberField: "",
    });
  }, [appState.editSlot]);
  useEffect(() => {
    data.current.focus();
  }, [appState.userVehicalData]);
  return (
    <form className="form" onSubmit={onsubmit} action="/action_page.php">
      <div className="input_info">
        <input
          type="text"
          className="input_tag"
          placeholder="Owner_Name"
          value={userFileds.ownerName}
          onChange={ownerNameInput}
          ref={data}
        />
        <AiOutlineInfoCircle className="info" />
        <p className="instractions">Enter owner name</p>
      </div>

      <p className="required">{requiredFileds.ownerField}</p>
      <div className="input_info">
        <input
          type="text"
          className="input_tag"
          placeholder="Registration_Number"
          value={userFileds.registraionNumber}
          onChange={registraionNumberInput}
        />
        <AiOutlineInfoCircle className="info" />
        <p className="instractions">
          Registraion number formate is should be like this "AP09-FF-1234"
        </p>
      </div>
      <p className="required">{requiredFileds.registrationField}</p>
      <div className="input_info">
        <input
          type="text"
          className="input_tag"
          placeholder="Car/Bike_Colour"
          value={userFileds.color}
          onChange={colorInput}
        />
        <AiOutlineInfoCircle className="info" />
        <p className="instractions">Enter car/bike Colour</p>
      </div>
      <p className="required">{requiredFileds.colorField}</p>
      <div className="input_info">
        <input
          type="text"
          className="input_tag"
          placeholder="Slot_Number"
          value={userFileds.slotNumber}
          onChange={slotInput}
        />
        <AiOutlineInfoCircle className="info" />
        <p className="instractions">Enter Slot number</p>
      </div>
      <p className="required">{requiredFileds.slotNumberField}</p>
      <div className="radio">
        <input
          type="radio"
          id="car"
          value="car"
          name="vehical"
          onChange={onChangeCar}
        />
        <label htmlFor="car">Car</label>
        <input
          type="radio"
          id="bike"
          value="bike"
          name="vehical"
          onChange={onChangeBike}
        />
        <label htmlFor="bike">Bike</label>
      </div>
      <button type="submit" className="sub_btn">
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  appState: state,
});

const mapDispatchToProps = (dispatch) => ({
  addNewData: (newData) => dispatch(addData(newData)),
  addUpdateData: (data) => dispatch(editAvailabelData(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
