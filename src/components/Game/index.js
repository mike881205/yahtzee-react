import React, { Component } from "react";
// import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
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
                { handName: "Ones", used: false, qty: 0, value: 1, validHand: false, points: 0 },
                { handName: "Twos", used: false, qty: 0, value: 2, validHand: false, points: 0 },
                { handName: "Threes", used: false, qty: 0, value: 3, validHand: false, points: 0 },
                { handName: "Fours", used: false, qty: 0, value: 4, validHand: false, points: 0 },
                { handName: "Fives", used: false, qty: 0, value: 5, validHand: false, points: 0 },
                { handName: "Sixes", used: false, qty: 0, value: 6, validHand: false, points: 0 }
            ],
            [
                { handName: "Three-of-a-Kind", used: false, validHand: false, points: 0 },
                { handName: "Four-of-a-Kind", used: false, validHand: false, points: 0 },
                { handName: "Full House", used: false, validHand: false, value: 25, points: 0 },
                { handName: "Small Straight", used: false, validHand: false, value: 30, points: 0 },
                { handName: "Large Straight", used: false, validHand: false, value: 40, points: 0 },
                { handName: "Yahtzee", validHand: false, count: 0, value: 50, points: 0 },
                { handName: "Chance", used: false, validHand: false, points: 0 }
            ]
        ],
        handChildrenLeft: [],
        handChildrenRight: [],
        leftTopScore: 0,
        leftTopBonus: 0,
        leftTotalScore: 0,
        yahtzeeBonusCount: 0,
        yahtzeeBonus: 0,
        rightTopScore: 0,
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
            handChildrenRight: handChildrenRight,
        })
    }

    shuffle = (event) => {

        event.preventDefault()

        let diceSlots = this.state.diceSlots
        let diceSlotChildren = []
        let roll = this.state.roll
        let gameOver = this.state.gameOver
        let roundOver = this.state.roundOver
        let scoreBoard = this.state.scoreBoard
        let handChildrenLeft = []

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
            for (let j = 0; j < scoreBoard[0].length; j++) {
                scoreBoard[0][j].qty = 0
                handChildrenLeft.push(
                    <ScoreBoardRow
                        key={j + "Left"}
                        id={j + "Left"}
                        hand={this.state.scoreBoard[0][j].handName}
                        points={0}
                        validHand={false}
                    />
                )
            }

            this.setState({
                roll: roll,
                roundOver: roundOver,
                diceSlotChildren: diceSlotChildren,
                scoreBoard: scoreBoard,
                handChildrenLeft: handChildrenLeft
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

                    finalValues.push(diceSlots[i].value)
                }

                this.calcHand(finalValues)

                this.setState({
                    diceSlots: diceSlots,
                    diceSlotChildren: diceSlotChildren,
                    roll: roll,
                    gameOver: gameOver,
                    roundOver: roundOver
                })
            }
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

        this.calcHand(finalValues)

        this.setState({
            roundOver: true,
            diceSlotChildren: diceSlotChildren
        })
    }

    calcHand = (values) => {

        let straights = []
        let scoreBoard = this.state.scoreBoard
        let handChildrenLeft = []
        let handChildrenRight = []
        let pair = false
        let threeOfAKind = false

        values.sort(function (a, b) {
            return a - b;
        });

        values = [2, 2, 3, 3, 3]
        console.log(values)

        // Find side values

        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < scoreBoard[0].length; j++) {
                if (values[i] === scoreBoard[0][j].value) {
                    scoreBoard[0][j].qty++
                    if (!scoreBoard[0][j].used) {
                        scoreBoard[0][j].validHand = true
                        scoreBoard[0][j].points = scoreBoard[0][j].value * scoreBoard[0][j].qty
                    }
                }
            }
        }

        // { handName: "Three-of-a-Kind", used: false, validHand: false, points: 0 },
        // { handName: "Four-of-a-Kind", used: false, validHand: false, points: 0 },
        // { handName: "Full House", used: false, validHand: false, value: 25, points: 0 },
        // { handName: "Small Straight", used: false, validHand: false, value: 30, points: 0 },
        // { handName: "Large Straight", used: false, validHand: false, value: 40, points: 0 },
        // { handName: "Yahtzee", validHand: false, count: 0, value: 50, points: 0 },
        // { handName: "Chance", used: false, points: 0 }

        for (let i = 0; i < scoreBoard[0].length; i++) {
            if (scoreBoard[0][i].points > 0) {
                switch (scoreBoard[0][i].qty) {
                    // case 1:

                    // break;
                    case 2:
                        console.log("Pair")
                        pair = true
                        break;
                    case 3:
                        console.log("Three-of-a-Kind")
                        if (!scoreBoard[1][0].used) {
                            scoreBoard[1][0].validHand = true
                        }
                        threeOfAKind = true
                        break;
                    case 4:
                        console.log("Three-of-a-Kind")
                        console.log("Four-of-a-Kind")
                        if (!scoreBoard[1][0].used) {
                            scoreBoard[1][0].validHand = true
                        }
                        else if (!scoreBoard[1][1].used) {
                            scoreBoard[1][1].validHand = true
                        }
                        break;
                    case 5:
                        console.log("Three-of-a-Kind")
                        console.log("Four-of-a-Kind")
                        console.log("Yahteeze")
                        scoreBoard[1][5].validHand = true
                        if (!scoreBoard[1][0].used) {
                            scoreBoard[1][0].validHand = true
                        }
                        else if (!scoreBoard[1][1].used) {
                            scoreBoard[1][1].validHand = true
                        }
                        break;
                }
            }
        }

        // Full House
        if (pair && threeOfAKind && !scoreBoard[1][2].used) {
            scoreBoard[1][2].validHand = true
            console.log("Full House")
        }

        // Chance
        if (!scoreBoard[1][6].used) {
            scoreBoard[1][6].validHand = true
            scoreBoard[1][6].points = values.reduce((a, b) => a + b, 0)
        }

        for (let i = 0; i < scoreBoard.length; i++) {
            for (let j = 0; j < scoreBoard[i].length; j++) {
                if (i === 0) {
                    handChildrenLeft.push(
                        <ScoreBoardRow
                            key={i + '' + j + "Left"}
                            id={i + '' + j + "Left"}
                            hand={scoreBoard[i][j].handName}
                            points={scoreBoard[i][j].points}
                            validHand={scoreBoard[i][j].validHand}
                        />
                    )
                }
                else {
                    handChildrenRight.push(
                        <ScoreBoardRow
                            key={i + '' + j + "Left"}
                            id={i + '' + j + "Left"}
                            hand={scoreBoard[i][j].handName}
                            points={scoreBoard[i][j].points}
                            validHand={scoreBoard[i][j].validHand}
                        />
                    )
                }
            }
        }

        
        this.setState({
            scoreBoard: scoreBoard,
            handChildrenLeft: handChildrenLeft,
            handChildrenRight: handChildrenRight
        })
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