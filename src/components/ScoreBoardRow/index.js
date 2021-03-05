import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";

class ScoreBoardRow extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    {this.props.hand}
                </div>
                <div className="col">
                    {this.props.score}
                </div>
            </div>
        )
    }

}

export default ScoreBoardRow