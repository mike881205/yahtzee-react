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
                                Hand
                            </div>
                            <div className="col">
                                Points
                            </div>
                        </div>
                        {this.props.handChildren}
                    </div>
                    <div className="col">
                        {/* Other Hands */}
                        <div className="row">
                            <div className="col">
                                Hand
                            </div>
                            <div className="col">
                                Points
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default BottomJumbo