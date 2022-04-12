import "./float.css"
import { BsFillChatSquareDotsFill } from "react-icons/bs"

function Float() {
    return (
        <div className="float flexRow">
            <div className="lFloat flexRow">
                <span >Sign In</span>
                |
                <span >Sign Up</span>

            </div>
            <div className="rFloat flexCol">
                <div className="circle flexCol">
                    <BsFillChatSquareDotsFill />

                </div>
            </div>

        </div>
    )
}
export default Float;