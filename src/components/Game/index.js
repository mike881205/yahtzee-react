import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import TopJumbo from '../TopJumbo'
import BottomJumbo from '../BottomJumbo'
import DiceSlot from '../DiceSlot'
import Images from '../../imgImport'
import './style.css'

class Game extends Component {

    state = {
        gameOver: true,
        turn: 0,
        roundOver: true,
        dice: [
            { value: 1, src: Images[0] },
            { value: 2, src: Images[1] },
            { value: 3, src: Images[2] },
            { value: 4, src: Images[3] },
            { value: 5, src: Images[4] },
            { value: 6, src: Images[5] }
        ],
        diceSlots: [
            { value: 1, src: Images[0], held: false },
            { value: 2, src: Images[1], held: false },
            { value: 3, src: Images[2], held: false },
            { value: 4, src: Images[3], held: false },
            { value: 5, src: Images[4], held: false },
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
                    diceSlotChildren={this.state.diceSlotChildren}
                    value={this.state.diceSlots[i].value}
                    src={this.state.diceSlots[i].src}
                    held={this.state.diceSlots[i].held}
                    holdBtn={this.holdBtn}
                    gameOver={this.state.gameOver}
                    turn={this.state.turn}
                    roundOver={this.state.roundOver}
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
        let turn = this.state.turn
        let gameOver = this.state.gameOver
        let roundOver = this.state.roundOver

        console.log(gameOver)

        if (gameOver) {
            gameOver = false
            roundOver = false
            this.setState({
                gameOver: gameOver,
                roundOver: roundOver
            })
        }
        else if (!gameOver && roundOver) {
            roundOver = false
            turn = 0
            this.setState({
                turn: turn,
                roundOver: roundOver
            })
        }
        else {
            turn++
            if (turn < 3) {
                diceSlots.forEach((slot, i) => {
                    let randomDice = this.state.dice[Math.floor(Math.random() * this.state.dice.length)]
                    if (!slot.held) {
                        slot.value = randomDice.value
                        slot.src = randomDice.src
                        diceSlotChildren.push(
                            <DiceSlot
                                key={i}
                                id={i}
                                value={slot.value}
                                src={slot.src}
                                held={slot.held}
                                holdBtn={this.holdBtn}
                                gameOver={gameOver}
                                turn={turn}
                                roundOver={roundOver}
                            />
                        )
                    }
                });
                console.log(turn)
                this.setState({
                    diceSlots: diceSlots,
                    diceSlotChildren: diceSlotChildren,
                    turn: turn,
                    gameOver: gameOver,
                    roundOver: roundOver
                })
            }
            else if (turn === 3) {
                roundOver = true
                diceSlots.forEach((slot, i) => {
                    let randomDice = this.state.dice[Math.floor(Math.random() * this.state.dice.length)]
                    if (!slot.held) {
                        slot.value = randomDice.value
                        slot.src = randomDice.src
                        diceSlotChildren.push(
                            <DiceSlot
                                key={i}
                                id={i}
                                value={slot.value}
                                src={slot.src}
                                held={slot.held}
                                holdBtn={this.holdBtn}
                                gameOver={gameOver}
                                turn={turn}
                                roundOver={roundOver}
                            />
                        )
                    }
                });
            }

            console.log(turn)
            this.setState({
                diceSlots: diceSlots,
                diceSlotChildren: diceSlotChildren,
                turn: turn,
                gameOver: gameOver,
                roundOver: roundOver
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
                    gameOver={this.state.gameOver}
                    turn={this.state.turn}
                    roundOver={this.state.roundOver}
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
            <div>
                <TopJumbo
                    diceSlotChildren={this.state.diceSlotChildren}
                    shuffle={this.shuffle}
                    holdBtn={this.holdBtn}
                    gameOver={this.state.gameOver}
                    turn={this.state.turn}
                    roundOver={this.state.roundOver}
                />
                <BottomJumbo />
            </div>
        )
    }

}

export default Game