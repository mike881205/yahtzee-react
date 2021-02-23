import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import Jumbotron from '../Jumbotron'
import DiceSlots from '../DiceSlots'

class TopJumbo extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <Jumbotron>
                <DiceSlots />
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col">
                        <FormBtn
                            text="Shuffle"
                            classes="btn-primary"
                        // onClick={}
                        />
                    </div>
                </div>
            </Jumbotron>
        )
    }

}

export default TopJumbo