import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import TopJumbo from '../TopJumbo'
import BottomJumbo from '../BottomJumbo'
import DiceSlot from '../DiceSlot'
import ScoreBoardRow from '../ScoreBoardRow'
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
        scoreBoard: [
            [
                { handName: "Ones", available: true, validHand: false, value: 1, points: 0 },
                { handName: "Twos", available: true, validHand: false, value: 2, points: 0 },
                { handName: "Threes", available: true, validHand: false, value: 3, points: 0 },
                { handName: "Fours", available: true, validHand: false, value: 4, points: 0 },
                { handName: "Fives", available: true, validHand: false, value: 5, points: 0 },
                { handName: "Sixes", available: true, validHand: false, value: 6, points: 0 }
            ],
            [
                { handName: "Three-of-a-Kind", available: true, validHand: false, points: 0 },
                { handName: "Four-of-a-Kind", available: true, validHand: false, points: 0 }
            ],
            [
                { handName: "Full House", available: true, validHand: false, value: 25, points: 0 },
                { handName: "Small Straight", available: true, validHand: false, value: 30, points: 0 },
                { handName: "Large Straight", available: true, validHand: false, value: 40, points: 0 }
            ],
            [
                { handName: "Yahtzee", validHand: false, count: 0, value: 50, points: 0 },
                { handName: "Chance", available: true, points: 0 }
            ]
        ],
        handChildrenLeft: [],
        handChildrenRight: [],
        leftTopScore: 0,
        leftTopBonus: 0,
        leftTotalScore: 0,
        yahtzeeBonusCount: 0,
        yahtzeeBonus: 0,
        rightTotalScore: 0,
        grandTotalScore: 0
    }

    componentDidMount() {
        let diceSlotChildren = []
        let handChildrenLeft = []
        let handChildrenRight = []

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

        for (let i = 0; i < this.state.scoreBoard.length; i++) {
            for (let j = 0; j < this.state.scoreBoard[i].length; j++) {
                if (i === 0) {
                    handChildrenLeft.push(
                        <ScoreBoardRow
                            key={i + '' + j + "Left"}
                            id={i + '' + j + "Left"}
                            hand={this.state.scoreBoard[i][j].handName}
                            points={this.state.scoreBoard[i][j].points}
                        />
                    )
                }
                else {
                    handChildrenRight.push(
                        <ScoreBoardRow
                            key={i + '' + j + "Right"}
                            id={i + '' + j + "Right"}
                            hand={this.state.scoreBoard[i][j].handName}
                            points={this.state.scoreBoard[i][j].points}
                        />
                    )
                }
            }
        }

        this.setState({
            diceSlotChildren: diceSlotChildren,
            handChildrenLeft: handChildrenLeft,
            handChildrenRight: handChildrenRight
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
        let scoreBoard = this.state.scoreBoard

        values.sort(function (a, b) {
            return a - b;
        });

        // Find side values

        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < scoreBoard[0].length; j++) {
                if (values[i] === scoreBoard[0][j].value) {
                    scoreBoard[0][j].validHand = true
                }
            }
        }

        // Find Duplicates

        let duplicates = values.filter((item, index) => values.indexOf(item) != index)
        let duplicates2 = duplicates.filter((item, index) => duplicates.indexOf(item) != index)

        switch (duplicates.length) {
            case 2:
                if (duplicates2.length === 1) {
                    scoreBoard[1][0].validHand = true
                }
                break;
            case 3:
                if (duplicates2.length === 1) {
                    scoreBoard[1][0].validHand = true
                    scoreBoard[2][0].validHand = true
                }
                else {
                    scoreBoard[1][0].validHand = true
                    scoreBoard[1][1].validHand = true
                }
                break;
            case 4:
                scoreBoard[1][0].validHand = true
                scoreBoard[1][1].validHand = true
                scoreBoard[3][1].validHand = true
                break;
        }

        // Find Straights

        for (let i = 0; i < values.length - 1; i++) {
            if (values[i + 1] - values[i] === 1) {
                straightCount++
            }
        }

        if (straightCount === 5) {
            scoreBoard[2][1].validHand = true
            scoreBoard[2][2].validHand = true
        }
        else if (straightCount === 4) {
            scoreBoard[2][1].validHand = true
        }

        console.log(scoreBoard)
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
                <BottomJumbo
                    handChildrenLeft={this.state.handChildrenLeft}
                    handChildrenRight={this.state.handChildrenRight}
                    leftTopScore={this.state.leftTopScore}
                    leftTopBonus={this.state.leftTopBonus}
                    leftTotalScore={this.state.leftTotalScore}
                    yahtzeeBonusCount={this.state.yahtzeeBonusCount}
                    yahtzeeBonus={this.state.yahtzeeBonus}
                    rightTotalScore={this.state.rightTotalScore}
                    grandTotalScore={this.state.grandTotalScore}
                />
            </div>
        )
    }

}

export default Game