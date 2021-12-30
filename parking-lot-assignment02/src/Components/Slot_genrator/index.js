import "./index.css";
import { connect } from "react-redux";
import { addSlots } from "../Redux/action";
import { useState } from "react";
const SlotGenrator = ({ appState, addNewSlots }) => {
  const [slots, setslots] = useState("");
  const [slotMsg, setslotMsg] = useState("");

  const inputSlots = (e) => {
    let value = e.target.value;
    setslots(value);
  };

  const onClickBtn = () => {
    if (slots === "") {
      setslotMsg("Enter value");
    } else {
      addNewSlots(parseInt(slots));
      setslots("");
      setslotMsg("");
    }
  };

  return (
    <div className="slot_genrate_container1">
      <div className="genrate_slot">
        <p className="slot_heading">Genrate Slots:</p>
        <input
          type="text"
          className="input_txt_tag"
          onChange={inputSlots}
          value={slots}
        />
      </div>
      <p className="msg">{slotMsg}</p>
      <button className="genrate" onClick={onClickBtn}>
        Genrate
      </button>
      <div className="genrate_slot">
        <p className="slot_heading">Availble Slots:</p>
        <input
          type="text"
          className="input_txt_tag"
          readOnly
          value={appState.slots - appState.userVehicalData.length}
        />
      </div>
      <div className="genrate_slot">
        <p className="slot_heading">Alloted Slots:</p>
        <input
          type="text"
          className="input_txt_tag"
          readOnly
          value={appState.userVehicalData.length}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  appState: state,
});

const mapDispatchToProps = (dispatch) => ({
  addNewSlots: (slot) => dispatch(addSlots(slot)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SlotGenrator);
