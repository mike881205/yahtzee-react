import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import DiceSlot from '../DiceSlot'

class TopJumbo extends Component {

    state = {
        dice: [
            { value: 1, src: this.props.images[0] },
            { value: 2, src: this.props.images[1] },
            { value: 3, src: this.props.images[2] },
            { value: 4, src: this.props.images[3] },
            { value: 5, src: this.props.images[4] },
            { value: 6, src: this.props.images[5] }
        ],
        diceSlots: [
            { value: 1, src: this.props.images[0], held: false },
            { value: 2, src: this.props.images[1], held: false },
            { value: 3, src: this.props.images[2], held: false },
            { value: 4, src: this.props.images[3], held: false },
            { value: 5, src: this.props.images[4], held: false },
            { value: 6, src: this.props.images[5], held: false }
        ],
        diceJSX: []
    }

    componentDidMount() {
        let diceJSX = []
        for (let i = 0; i < 5; i++) {
            diceJSX.push(
                <DiceSlot
                    key={i}
                    id={i}
                    value={this.state.diceSlots[i].value}
                    src={this.state.diceSlots[i].src}
                />
            )
        }
        this.setState({
            diceJSX: diceJSX
        })
    }

    shuffle = () => {
        let randomDice = this.state.dice[Math.floor(Math.random() * this.state.dice.length)]
        console.log(randomDice.value)
    }

    render() {
        return (
            <div className="jumbotron" align="center">
                <div className="row">
                    {this.state.diceJSX}
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col">
                        <FormBtn text="Shuffle" classes="btn-primary"
                        onClick={this.shuffle}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default TopJumbo