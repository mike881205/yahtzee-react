import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import Images from '../../imgImport'
import './style.css'

class DiceSlots extends Component {

    state = {
        imagePaths: []
    }

    componentDidMount() {
        console.log(Images)
        this.setState({
            imagePaths: Images
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <img src={this.state.imagePaths[0]} alt='dice'></img>
                </div>
                <div className="col">
                    <img src={this.state.imagePaths[1]} alt='dice'></img>
                </div>
                <div className="col">
                    <img src={this.state.imagePaths[2]} alt='dice'></img>
                </div>
                <div className="col">
                    <img src={this.state.imagePaths[3]} alt='dice'></img>
                </div>
                <div className="col">
                    <img src={this.state.imagePaths[4]} alt='dice'></img>
                </div>
            </div>
        )
    }

}

export default DiceSlots