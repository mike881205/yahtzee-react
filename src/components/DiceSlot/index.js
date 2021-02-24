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
                <div className="row">
                    <div className="col">
                        {
                            this.props.held ?
                                <FormBtn text="Held" classes="btn-danger" id={this.props.id} onClick={this.props.holdBtn} disabled={this.props.roundOver || this.props.turn === 3 ? "disabled" : ""} />
                                :
                                <FormBtn text="Hold" classes="btn-success" id={this.props.id} onClick={this.props.holdBtn} disabled={this.props.roundOver || this.props.turn === 3 ? "disabled" : ""} />
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default DiceSlot