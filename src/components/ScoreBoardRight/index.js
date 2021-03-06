import React, { Component } from "react";
// import { FormGroup, Input, Label, Small, FormBtn } from "../Form";

class ScoreBoardRight extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="col">
                {/* side values */}
                <div className="row">
                    <div className="col">
                        <h3>Hand</h3>
                    </div>
                    <div className="col">
                        <h3>Points</h3>
                    </div>
                </div>
                {/* Hand Children */}
                {this.props.handChildrenRight}
                {/* Hand Children */}
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <p><strong>Yahtzee Bonus x {this.props.yahtzeeBonusCount}</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <p><strong>{this.props.yahtzeeBonus}</strong></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5><strong>Right Total</strong></h5>
                    </div>
                    <div className="col">
                        <h5><strong>{this.props.rightTotalScore}</strong></h5>
                    </div>
                </div>
            </div>
        )
    }

}

export default ScoreBoardRight