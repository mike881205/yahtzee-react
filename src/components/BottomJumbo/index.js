import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import ScoreBoardRow from '../ScoreBoardRow'

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
                        {this.props.handChildren}
                        {/* Hand Children */}
                        <div className="row">
                            <div className="col">
                                <p>Top Score</p>
                            </div>
                            <div className="col">
                                <p>Points</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>{"Bonus (If Top Score is > 63)"}</p>
                            </div>
                            <div className="col">
                                <p>Points</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4>Left Total</h4>
                            </div>
                            <div className="col">
                                <h4>Points</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* Other Hands */}
                        <div className="row">
                            <div className="col">
                                <h3>Hand</h3>
                            </div>
                            <div className="col">
                                <h3>Points</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default BottomJumbo