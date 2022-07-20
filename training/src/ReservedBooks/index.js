import { Component } from "react";
import Clock from "./components/clock";
import Button from '@material-ui/core/Button';
class ReservedBooks extends Component {
    state = { showClock: false }
    onToggleClock = () => {
        this.setState(preVState => {
            const { showClock } = preVState
            return {
                showClock: !showClock,
            }
        })
    }
    render() {
        const { showClock } = this.state
        return (
            <div className="flexCol alignCntr justifyCntr">

                <Button type="button" onClick={this.onToggleClock} variant="contained" color="primary">
                    {showClock ? 'HideClock' : 'showClock'}
                </Button>
                <div className="pdngTMD">
                    {showClock && <Clock />}
                </div>

            </div>
        )
    }
}
export default ReservedBooks;
