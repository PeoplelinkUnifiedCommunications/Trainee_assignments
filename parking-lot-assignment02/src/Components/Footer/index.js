import "./index.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import logo from "../../images/peoplelinklogo.png";
const Footter = () => {
  return (
    <div className="footter">
      <AiOutlineCopyrightCircle className="copy_logo" /> 2021
      <img src={logo} alt="logo1" className="image_logo" />. All Rights Reserved
    </div>
  );
};
export default Footter;
