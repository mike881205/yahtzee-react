import React, { Component } from "react";
// import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";

class ScoreBoardRow extends Component {

    state = {
        styles: {margin: '1%'}
    }

    componentDidMount() {
        // let rowId = 
        // console.log(rowId)
        // this.setState({ rowId:  })
    }

    render() {
        if (this.props.validHand) {
            return (
                <button className="btn-success"
                id={this.props.id} onClick={this.props.selectHand}
                    // style={this.state.styles}
                >
                    <div className="row" >
                        <div className="col">
                            <p >{this.props.hand}</p>
                        </div>
                        <div className="col">
                            <p >{this.props.points}</p>
                        </div>
                    </div>
                </button>
            )
        }
        else {
            return (
                <div className="row" id={this.props.id} >
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
}

export default ScoreBoardRow