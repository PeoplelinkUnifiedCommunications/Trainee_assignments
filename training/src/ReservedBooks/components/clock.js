import { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }
    // componentDidMount() {
    //     this.timerID = setInterval(this.tick, 1000)
    // }
    // componentWillUnmount() {
    //     clearInterval(this.timerID)
    // }
    // tick = () => {
    //     this.setState({
    //         date: new Date()
    //     })
    // }

    render() {
        const date = this.state
        console.log(date)
        return (
            <div className="flexCol">
                <div className="lightTxtLG boldTxt">
                    Clock
                </div>
                {/* <p className="time">{date.toLocaleTimeString()}</p> */}
            </div>
        )
    }
}
export default Clock;