import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import ScoreBoardLeft from '../ScoreBoardLeft'
import ScoreBoardRight from '../ScoreBoardRight'

class BottomJumbo extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="jumbotron" align="center">
                <div className="row">
                    <ScoreBoardLeft
                        handChildrenLeft={this.props.handChildrenLeft}
                    />
                    <ScoreBoardRight
                        handChildrenRight={this.props.handChildrenRight}
                    />
                </div>
            </div>
        )
    }

}

export default BottomJumbo