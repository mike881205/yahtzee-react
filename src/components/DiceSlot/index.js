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
                            <FormBtn 
                                classes={this.props.held ? "btn-danger" : "btn-success"}
                                text={this.props.held ? "Held" : "Hold"}
                                // onClick={}
                                disabled={this.props.gameOver || this.props.roundOver ? "disabled" : ""}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default DiceSlot