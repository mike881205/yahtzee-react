import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";

class DiceSlot extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="col">
                <div className="row">
                    <div className="col">
                        <img value={this.props.value} src={this.props.src}></img>

                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col">
                        <FormBtn
                            id={this.props.id}
                            classes={this.props.held ? "btn-danger" : "btn-success"}
                            text={this.props.held ? "Held" : "Hold"}
                            onClick={this.props.holdBtn}
                            disabled={this.props.gameOver || this.props.roundOver || this.props.roll === 0 ? "disabled" : ""}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default DiceSlot