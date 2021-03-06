import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import ScoreBoardLeft from '../ScoreBoardLeft'
import ScoreBoardRight from '../ScoreBoardRight'

class BottomJumbo extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="jumbotron" align="center">
                <div className="row">
                    <div className="col">
                        <h1>Score Board</h1>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <ScoreBoardLeft
                        handChildrenLeft={this.props.handChildrenLeft}
                        leftTopScore={this.props.leftTopScore}
                        leftTopBonus={this.props.leftTopBonus}
                        leftTotalScore={this.props.leftTotalScore}
                    />
                    <ScoreBoardRight
                        handChildrenRight={this.props.handChildrenRight}
                        yahtzeeBonusCount={this.props.yahtzeeBonusCount}
                        yahtzeeBonus={this.props.yahtzeeBonus}
                        rightTotalScore={this.props.rightTotalScore}
                    />
                </div>
                <br></br>
                <div className="row">
                    <div className="col">
                        <h1>Grand Total: {this.props.grandTotalScore}</h1>
                    </div>
                </div>
            </div>
        )
    }

}

export default BottomJumbo