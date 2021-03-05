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
        roll: 0,
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
        diceSlotChildren: [],
        finalValues: [],
        scoreBoard: [
            { handName: "Ones", score: 0, validHand: false, available: true },
            { handName: "Twos", score: 0, validHand: false, available: true },
            { handName: "Threes", score: 0, validHand: false, available: true },
            { handName: "Fours", score: 0, validHand: false, available: true },
            { handName: "Fives", score: 0, validHand: false, available: true },
            { handName: "Sixes", score: 0, validHand: false, available: true },
            { handName: "Three-of-a-Kind", score: 0, validHand: false, available: true },
            { handName: "Four-of-a-Kind", score: 0, validHand: false, available: true },
            { handName: "Chance", score: 0, validHand: false, available: true },
            { handName: "Full House", score: 25, validHand: false, available: true },
            { handName: "Small Straight", score: 30, validHand: false, available: true },
            { handName: "Large Straight", score: 40, validHand: false, available: true },
            { handName: "Yahtzee", score: 50, bonus: 0, validHand: false}
        ]
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
                    roll={this.state.roll}
                    roundOver={this.state.roundOver}
                />
            )
        }

        this.setState({
            diceSlotChildren: diceSlotChildren
        })
    }

    shuffle = (event) => {

        event.preventDefault()

        let diceSlots = this.state.diceSlots
        let diceSlotChildren = []
        let roll = this.state.roll
        let gameOver = this.state.gameOver
        let roundOver = this.state.roundOver

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
            roll = 0
            for (let i = 0; i < diceSlots.length; i++) {
                diceSlots[i].value = this.state.dice[i].value
                diceSlots[i].src = this.state.dice[i].src
                diceSlots[i].held = false
                diceSlotChildren.push(
                    <DiceSlot
                        key={i}
                        id={i}
                        value={diceSlots[i].value}
                        src={diceSlots[i].src}
                        held={diceSlots[i].held}
                        holdBtn={this.holdBtn}
                        gameOver={gameOver}
                        roll={roll}
                        roundOver={roundOver}
                    />
                )
            }
            this.setState({
                roll: roll,
                roundOver: roundOver,
                diceSlotChildren: diceSlotChildren
            })
        }
        else {
            roll++
            if (roll < 3) {
                for (let i = 0; i < diceSlots.length; i++) {
                    if (!diceSlots[i].held) {
                        let randomDice = this.state.dice[Math.floor(Math.random() * this.state.dice.length)]
                        diceSlots[i].value = randomDice.value
                        diceSlots[i].src = randomDice.src
                    }
                    diceSlotChildren.push(
                        <DiceSlot
                            key={i}
                            id={i}
                            value={diceSlots[i].value}
                            src={diceSlots[i].src}
                            held={diceSlots[i].held}
                            holdBtn={this.holdBtn}
                            gameOver={gameOver}
                            roll={roll}
                            roundOver={roundOver}
                        />
                    )
                }
                this.setState({
                    diceSlots: diceSlots,
                    diceSlotChildren: diceSlotChildren,
                    roll: roll,
                    gameOver: gameOver,
                    roundOver: roundOver
                })
            }
            else if (roll === 3) {
                roundOver = true
                let finalValues = []
                for (let i = 0; i < diceSlots.length; i++) {
                    if (!diceSlots[i].held) {
                        let randomDice = this.state.dice[Math.floor(Math.random() * this.state.dice.length)]
                        diceSlots[i].value = randomDice.value
                        diceSlots[i].src = randomDice.src
                    }
                    diceSlotChildren.push(
                        <DiceSlot
                            key={i}
                            id={i}
                            value={diceSlots[i].value}
                            src={diceSlots[i].src}
                            held={diceSlots[i].held}
                            holdBtn={this.holdBtn}
                            gameOver={gameOver}
                            roll={roll}
                            roundOver={roundOver}
                        />
                    )

                    // finalValues = [1, 1, 2, 3, 3]
                    finalValues.push(diceSlots[i].value)
                }
                this.calcHand(finalValues)
            }
            this.setState({
                diceSlots: diceSlots,
                diceSlotChildren: diceSlotChildren,
                roll: roll,
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
                    roll={this.state.roll}
                    roundOver={this.state.roundOver}
                />
            )
        }
        this.setState({
            diceSlots: diceSlots,
            diceSlotChildren: diceSlotChildren
        })
    }

    endRound = () => {
        let diceSlots = this.state.diceSlots
        let diceSlotChildren = []
        let finalValues = []

        for (let i = 0; i < diceSlots.length; i++) {
            finalValues.push(diceSlots[i].value)
            diceSlotChildren.push(
                <DiceSlot
                    key={i}
                    id={i}
                    value={diceSlots[i].value}
                    src={diceSlots[i].src}
                    held={diceSlots[i].held}
                    holdBtn={this.holdBtn}
                    gameOver={this.state.gameOver}
                    roll={this.state.roll}
                    roundOver={true}
                />
            )
        }

        // finalValues = [1, 1, 1, 3, 3]
        this.calcHand(finalValues)

        this.setState({
            roundOver: true,
            diceSlotChildren: diceSlotChildren
        })
    }

    calcHand = (values) => {

        let straightCount = 1
        let smallStraight = false
        let largeStraight = false
        let threeOfaKind = false
        let fourOfaKind = false
        let fullHouse = false
        let yahtzee = false
        let scoreBoard = this.state.scoreBoard

        values.sort(function (a, b) {
            return a - b;
        });

        let duplicates = values.filter((item, index) => values.indexOf(item) != index)
        let duplicates2 = duplicates.filter((item, index) => duplicates.indexOf(item) != index)

        switch (duplicates.length) {
            case 2:
                if (duplicates2.length === 1) {
                    threeOfaKind = true
                }
                break;
            case 3:
                if (duplicates2.length === 1) {
                    threeOfaKind = true
                    fullHouse = true
                }
                else {
                    threeOfaKind = true
                    fourOfaKind = true
                }
                break;
            case 4:
                threeOfaKind = true
                fourOfaKind = true
                yahtzee = true;
                break;
        }

        for (let i = 0; i < values.length - 1; i++) {
            if (values[i + 1] - values[i] === 1) {
                straightCount++
            }
        }

        if (straightCount === 5) {
            smallStraight = true
            largeStraight = true
        }
        else if (straightCount === 4) {
            smallStraight = true
        }

        console.log("Sml Straight: " + smallStraight)
        console.log("Lrg  Straight: " + largeStraight)
        console.log("3oaK: " + threeOfaKind)
        console.log("4oaK: " + fourOfaKind)
        console.log("full house: " + fullHouse)
        console.log("yahtzee: " + yahtzee)
        console.log("nothing: " + yahtzee)
    }

    render() {
        return (
            <div>
                <TopJumbo
                    diceSlotChildren={this.state.diceSlotChildren}
                    diceSlots={this.state.diceSlots}
                    shuffle={this.shuffle}
                    holdBtn={this.holdBtn}
                    endRound={this.endRound}
                    gameOver={this.state.gameOver}
                    roll={this.state.roll}
                    roundOver={this.state.roundOver}
                />
                <BottomJumbo />
            </div>
        )
    }

}

export default Game