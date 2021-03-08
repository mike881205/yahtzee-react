import React, { Component } from "react";
// import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";

class ScoreBoardRow extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        if (this.props.available) {
            return (
                <button className="btn-success">
                    <div className="row" >
                        <div className="col">
                            <p>{this.props.hand}</p>
                        </div>
                        <div className="col">
                            <p>{this.props.points}</p>
                        </div>
                    </div>
                </button>
            )
        }
        return (
            <div className="row" >
                <div className="col">
                    <p>{this.props.hand}</p>
                </div>
                <div className="col">
                    <p>{this.props.points}</p>
                </div>
            </div>
        )
    }

}

export default ScoreBoardRow