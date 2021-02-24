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
        ]
    }

    componentDidMount() {

    }

    shuffle = () => {
        let diceSlots = this.state.diceSlots

        diceSlots.forEach(dice => {
            let randomDice = this.state.dice[Math.floor(Math.random() * this.state.dice.length)]
            if (!dice.held) {
                dice.value = randomDice.value
                dice.src = randomDice.src
            }
        });

        this.setState({
            diceSlots: diceSlots
        })
    }

    render() {
        return (
            <div className="jumbotron" align="center">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img value={this.state.diceSlots[0].value} src={this.state.diceSlots[0].src}></img>
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
                    <div className="col">
                        <div className="row">
                            <div className="col">
                            <img value={this.state.diceSlots[1].value} src={this.state.diceSlots[1].src}></img>

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
                    <div className="col">
                        <div className="row">
                            <div className="col">
                            <img value={this.state.diceSlots[2].value} src={this.state.diceSlots[2].src}></img>

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
                    <div className="col">
                        <div className="row">
                            <div className="col">
                            <img value={this.state.diceSlots[3].value} src={this.state.diceSlots[3].src}></img>

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
                    <div className="col">
                        <div className="row">
                            <div className="col">
                            <img value={this.state.diceSlots[4].value} src={this.state.diceSlots[4].src}></img>

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