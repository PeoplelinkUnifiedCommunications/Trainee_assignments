import "./index.css";
import { AiOutlineCopyrightCircle, AiOutlineInfoCircle } from "react-icons/ai";
import logo from "../../images/peoplelinklogo.png";
const Footter = () => {
  return (
    <div className="footter">
      <AiOutlineCopyrightCircle className="copy_logo" /> 2021
      <img src={logo} alt="logo1" className="image_logo" />. All Rights Reserved
      <AiOutlineInfoCircle className="info_for_fotter" />
      <p className="devloped_by">
        Devloped by : Harish Sriyadula through react and redux
      </p>
    </div>
  );
};
export default Footter;
