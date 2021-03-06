import React, { Component } from "react";
// import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";

class ScoreBoardLeft extends Component {

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
                {this.props.handChildrenLeft}
                {/* Hand Children */}
                <div className="row">
                    <div className="col">
                        <p><strong>Top Score</strong></p>
                    </div>
                    <div className="col">
                        <p><strong>{this.props.leftTopScore}</strong></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p><strong>Bonus</strong></p>
                    </div>
                    <div className="col">
                        <p><strong>{this.props.leftTopBonus}</strong></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5><strong>Left Total</strong></h5>
                    </div>
                    <div className="col">
                        <h5><strong>{this.props.leftTotalScore}</strong></h5>
                    </div>
                </div>
            </div>
        )
    }

}

export default ScoreBoardLeft