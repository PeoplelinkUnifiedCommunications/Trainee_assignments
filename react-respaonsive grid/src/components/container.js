import React from 'react'

function Container() {
    return (
        <div className="mainCntnr colFlex">
            <div className="grid1  rowFlex">
                <div className="pdngSM">
                    <div className="bloack1 ">bloack1</div>
                </div>
                <div className="pdngSM">
                    <div className="bloack2 bloack1">bloack2</div>
                </div>
            </div>
            <div className="grid2  rowFlex">
                <div className="pdngSM">
                    <div className="bloack3 bloack1 ">bloack3</div>
                </div>
                <div className="pdngSM">
                    <div className="bloack4 bloack1">bloack4</div>
                </div>
            </div>
            <div className="rowFlex grid2">
                <div className="pdngSM">
                    <div className="bloack5 bloack1 ">bloack5</div>
                </div>
                <div className="pdngSM">
                    <div className="bloack6 bloack1">bloack6</div>
                </div>
            </div>
            <div className=" rowFlex flexWrap ">
                <div className="pdngSM">
                    <div className="bloack7 bloack1 ">bloack7</div>
                </div>
                <div className="pdngSM">
                    <div className="bloack8 bloack1">bloack8</div>
                </div>
                <div className="pdngSM">
                    <div className="bloack9 bloack1 ">bloack9</div>
                </div>
            </div>
            <div className=" rowFlex">
                <div className="pdngSM">
                    <div className="bloack10 bloack1">bloack10</div>
                </div>

            </div>
            <div className=" rowFlex">
                <div className="pdngSM">
                    <div className="bloack11 bloack1 ">bloack11</div>
                </div>

            </div>
            <div className=" grid2 ">
                <div className="rowFlex">
                    <div className="pdngSM">
                        <div className="bloack12 bloack1">bloack12</div>
                    </div>
                    <div className="pdngSM">
                        <div className="bloack13 bloack1">bloack13</div>
                    </div>
                    <div className="pdngSM grid3">
                        <div className="bloack14 bloack1">bloack14</div>
                </div>
                   
                </div>
                
           </div>

        </div>
    )
}

export default Container;
