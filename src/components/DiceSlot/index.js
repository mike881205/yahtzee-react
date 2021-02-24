import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import './style.css'

class DiceSlot extends Component {

    state = {
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="col-sm diceSlot">
                <div className="row">
                    <div className="col">
                        <img value={this.props.value} src={this.props.src}></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <FormBtn text="Hold" classes="btn-danger"
                        // onClick={}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default DiceSlot