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
        ],
        diceSlotChildren: []
    }

    componentDidMount() {

        let diceSlotChildren = []

        for (let i = 0; i < this.state.diceSlots.length; i++) {
            diceSlotChildren.push(
                <DiceSlot
                    key={i}
                    id={i}
                    value={this.state.diceSlots[i].value}
                    src={this.state.diceSlots[i].src}
                    held={this.state.diceSlots[i].held}
                    holdBtn={this.holdBtn}
                    newGame={this.props.newGame}
                />
            )
        }

        this.setState({
            diceSlotChildren: diceSlotChildren
        })
    }

    shuffle = () => {

        let diceSlots = this.state.diceSlots
        let diceSlotChildren = []

        console.log(this.props.turn)

        if (this.props.turn === 4) {
            for (let i = 0; i < this.state.diceSlots.length; i++) {
                diceSlotChildren.push(
                    <DiceSlot
                        key={i}
                        id={i}
                        value={this.state.dice[i].value}
                        src={this.state.dice[i].src}
                        held={false}
                        holdBtn={this.holdBtn}
                        newGame={this.props.newGame}
                    />
                )
            }

            this.setState({
                diceSlots: [
                    { value: 1, src: this.props.images[0], held: false },
                    { value: 2, src: this.props.images[1], held: false },
                    { value: 3, src: this.props.images[2], held: false },
                    { value: 4, src: this.props.images[3], held: false },
                    { value: 5, src: this.props.images[4], held: false },
                ],
                diceSlotChildren: diceSlotChildren
            })

            this.props.updateTurn()
        }
        else {
            diceSlots.forEach(dice => {
                let randomDice = this.state.dice[Math.floor(Math.random() * this.state.dice.length)]
                if (!dice.held) {
                    dice.value = randomDice.value
                    dice.src = randomDice.src
                }
            });

            for (let i = 0; i < diceSlots.length; i++) {
                diceSlotChildren.push(
                    <DiceSlot
                        key={i}
                        id={i}
                        value={diceSlots[i].value}
                        src={diceSlots[i].src}
                        held={diceSlots[i].held}
                        holdBtn={this.holdBtn}
                        newGame={this.props.newGame}
                    />
                )
            }

            this.props.updateTurn()

            this.setState({
                diceSlots: diceSlots,
                diceSlotChildren: diceSlotChildren
            })
        }
    }

    holdBtn = event => {

        let diceSlots = this.state.diceSlots
        let diceSlotChildren = []

        for (let i = 0; i < diceSlots.length; i++) {
            if (parseInt(event.target.id) === i) {
                if (!diceSlots[i].held) {
                    diceSlots[i].held = true
                }
                else {
                    diceSlots[i].held = false
                }
            }

            diceSlotChildren.push(
                <DiceSlot
                    key={i}
                    id={i}
                    value={diceSlots[i].value}
                    src={diceSlots[i].src}
                    held={diceSlots[i].held}
                    holdBtn={this.holdBtn}
                    newGame={this.props.newGame}
                />
            )
        }

        this.setState({
            diceSlots: diceSlots,
            diceSlotChildren: diceSlotChildren
        })
    }

    render() {
        return (
            <div className="jumbotron" align="center">
                <div className="row">
                    {this.state.diceSlotChildren}
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col">
                        {
                            this.props.newGame ?
                                <FormBtn text={this.props.turn === 4 ? "Next Round" : "Shuffle"} classes={this.props.turn === 4 ? "btn-warning" : "btn-primary"}
                                    onClick={this.shuffle}
                                />
                                :
                                <FormBtn text="New Game" classes="btn-success"
                                    onClick={this.props.startGame}
                                />
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default TopJumbo