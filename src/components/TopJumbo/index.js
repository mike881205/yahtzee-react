import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";

class TopJumbo extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="jumbotron" align="center">
                <div className="row">
                    <div className="col">
                        <h1>Roll: {this.props.roll}</h1>
                    </div>
                </div>
                <div className="row">
                    {this.props.diceSlotChildren}
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col">
                        <FormBtn
                            classes={this.props.gameOver ? "btn-success" : this.props.roundOver ? "btn-warning" : "btn-primary"}
                            text={this.props.gameOver ? "New Game" : this.props.roundOver ? "Next Round" : "Shuffle"}
                            onClick={this.props.shuffle}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default TopJumbo